import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { useButtonDisable } from '@hooks/useButtonDisable.ts';
import { PasswordInputs } from '@components/password-inputs';
import { EnterButtons } from '@components/enter-buttons';
import { EmailInput } from '@components/email-input';
import { Loader } from '@components/loader';
import { RegistrationValuesType } from './../../types';
import { useRegistrationMutation } from '@redux/index.ts';
import { PATHS } from '@constants/paths.ts';
import { useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { setRegistrationData } from '@redux/reducers/auth.slice.ts';
import { ERROR_STATUS } from '@constants/error-status.ts';

import styles from './registration.module.css';

export const Registration = () => {
    const [sendRegistrationData, { isLoading }] = useRegistrationMutation();
    const dispatch = useAppDispatch();
    const registrationData = useAppSelector((state) => state.auth.registrationData);
    const navigate = useNavigate();
    const { form, disabled, handleFormChange } = useButtonDisable();
    const [isEmailHasError, setIsEmailHasError] = useState(false);
    const error_style = isEmailHasError ? 'email_error' : 'no_error';

    const prevPath = useAppSelector((state) => state.router.previousLocations);

    const onHandleFormChange = () => {
        handleFormChange();
        const hasEmailError = form.getFieldsError(['email']).some(({ errors }) => errors.length);
        setIsEmailHasError(hasEmailError);
    };

    const onFinish = (values: RegistrationValuesType) => {
        sendRegistrationData({ email: values.email, password: values.password })
            .unwrap()
            .then(() => {
                registrationData.email &&
                    dispatch(setRegistrationData({ email: '', password: '' }));
                navigate(PATHS.REGISTRATION_SUCCESS);
            })
            .catch((e) => {
                if (e.status === ERROR_STATUS.CONFLICT) {
                    navigate(PATHS.ERROR_USER_EXIST);
                } else {
                    dispatch(
                        setRegistrationData({ email: values.email, password: values.password }),
                    );
                    navigate(PATHS.ERROR);
                }
            });
    };

    useEffect(() => {
        if (
            registrationData.email &&
            registrationData.password &&
            prevPath &&
            prevPath[prevPath.length - 1].location?.pathname === PATHS.ERROR
        ) {
            onFinish(registrationData);
        }
    }, [registrationData, prevPath]);

    if (localStorage.getItem('accessToken')) {
        return <Navigate to={PATHS.MAIN} />;
    }

    return (
        <>
            {isLoading && <Loader />}
            <Form
                name='register'
                className={styles.registration_form}
                onFinish={onFinish}
                onFieldsChange={onHandleFormChange}
                form={form}
            >
                <div id={styles.email_id} className={`${styles[error_style]}`}>
                    <EmailInput
                        className={styles.registration_email}
                        dataAttribute='registration-email'
                    />
                </div>
                <PasswordInputs
                    placeholder='Пароль'
                    passwordDataAttribute='registration-password'
                    confirmDataAttribute='registration-confirm-password'
                />
                <EnterButtons
                    enterButtonBody='Войти'
                    dataAttribute='registration-submit-button'
                    googleButtonBody='Регистрация через Google'
                    className='registration_buttons'
                    disabled={disabled}
                />
            </Form>
        </>
    );
};
