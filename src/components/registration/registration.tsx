import { useState } from 'react';
import { Form } from 'antd';
import { useButtonDisable } from '@hooks/useButtonDisable.ts';
import { PasswordInputs } from '@components/password-inputs';
import { EnterButtons } from '@components/enter-buttons';
import { EmailInput } from '@components/email-input';
import { RegistrationValuesType } from './../../types';

import s from './registration.module.css';

export const Registration = () => {
    const { form, disabled, handleFormChange } = useButtonDisable();
    const [isEmailHasError, setIsEmailHasError] = useState(false);
    const error_style = isEmailHasError ? 'email_error' : '';
    const onHandleFormChange = () => {
        handleFormChange();
        const hasEmailError = form.getFieldsError(['email']).some(({ errors }) => errors.length);
        setIsEmailHasError(hasEmailError);
    };

    const onFinish = (values: RegistrationValuesType) => {
        console.log('Received values of form: ', {
            email: values.email,
            password: values.password,
        });
    };
    return (
        <>
            <Form
                name='register'
                className={s.registration_form}
                onFinish={onFinish}
                onFieldsChange={onHandleFormChange}
                form={form}
            >
                <div id={s.email_id} className={`${s[error_style]}`}>
                    <EmailInput
                        className={s.registration_email}
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
