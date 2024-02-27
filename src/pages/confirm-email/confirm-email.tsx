import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Result } from 'antd';
import VerificationInput from 'react-verification-input';
import { useConfirmEmailMutation } from '@redux/auth-api.ts';
import { EnterBg } from '@components/enter-bg';
import { Loader } from '@components/loader';
import { useAppSelector } from '@redux/configure-store.ts';
import { PATHS } from '@constants/paths.ts';

import styles from '@components/result-card/result-card.module.css';
import './confirm-email.css';

export const ConfirmEmail = () => {
    const navigate = useNavigate();
    const [sendConfirmEmailCode, { isLoading }] = useConfirmEmailMutation();
    const [noError, setNoError] = useState(true);
    const [verificationCode, setVerificationCode] = useState('');
    const status = noError ? 'info' : 'error';
    const errorTitle = status === 'error' ? 'Неверный код. ' : '';
    const className = status === 'info' ? 'confirm_email' : 'error_confirm_email';
    const characterClass = status === 'info' ? 'character' : 'error character';
    const emailForForgot = useAppSelector((state) => state.auth.emailForForgot);

    const handleVerificationCodeChange = (code: string) => {
        setVerificationCode(code);
    };
    const onVerificationComplete = (value: string) => {
        sendConfirmEmailCode({ email: emailForForgot.email, code: value })
            .unwrap()
            .then(() => {
                navigate(PATHS.CHANGE_PASSWORD);
            })
            .catch(() => {
                setNoError(false);
                setVerificationCode('');
            });
    };

    const prevPath = useAppSelector((state) => state.router.previousLocations);
    if (prevPath && prevPath.length <= 1) {
        return <Navigate to={PATHS.AUTH} />;
    }

    return (
        <>
            {isLoading && <Loader />}
            <EnterBg>
                <Result
                    className={`${styles.wrapper} ${styles[className]}`}
                    status={status}
                    title={`${errorTitle}Введите код для восстановления аккауанта`}
                    subTitle={`Мы отправили вам на e-mail ${emailForForgot} шестизначный код. Введите его в поле ниже.`}
                    extra={
                        <VerificationInput
                            value={verificationCode}
                            onChange={handleVerificationCodeChange}
                            onComplete={onVerificationComplete}
                            placeholder=''
                            inputProps={{ 'data-test-id': 'verification-input' }}
                            classNames={{
                                container: 'container',
                                character: characterClass,
                                characterInactive: 'character--inactive',
                                characterSelected: 'character--selected',
                            }}
                        />
                    }
                />
            </EnterBg>
        </>
    );
};
