import { EnterBg } from '@components/enter-bg';
import { Result } from 'antd';
import VerificationInput from 'react-verification-input';

import s from '@components/result-card/result-card.module.css';
import './confirm-email.css';

export const ConfirmEmail = () => {
    const a = 3 > 2; //need to change
    const status = a ? 'info' : 'error';
    const errorTitle = status === 'error' ? 'Неверный код. ' : '';
    const className = status === 'info' ? 'confirm_email' : 'error_confirm_email';
    const characterClass = status === 'info' ? 'character' : 'error character';
    const email = '123456@aaa.aa'; //need to change
    const onVerificationComplete = (value: string) => {
        console.log(value);
    };
    return (
        <EnterBg>
            <Result
                className={`${s.wrapper} ${s[className]}`}
                status={status}
                title={`${errorTitle}Введите код для восстановления аккауанта`}
                subTitle={`Мы отправили вам на e-mail ${email} шестизначный код. Введите его в поле ниже.`}
                extra={
                    <VerificationInput
                        onComplete={onVerificationComplete}
                        placeholder=''
                        data-test-id='verification-input'
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
    );
};
