import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { EnterButtons } from '@components/enter-buttons';
import { EmailInput } from '@components/email-input';
import { LoginValuesType } from './../../types';

import './login.css';
import s from './login.module.css';

export const Login = () => {
    const [form] = Form.useForm();
    const [isSendValues, setIsSendValues] = useState(true);
    const [isTwoTouched, setIsTwoTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [disabledForgot, setDisabledForgot] = useState(false);

    const [isEmailHasError, setIsEmailHasError] = useState(false);
    const error_style = isEmailHasError ? 'email_error' : '';

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        const hasEmailError = form.getFieldsError(['email']).some(({ errors }) => errors.length);
        setIsTwoTouched(form.isFieldsTouched(['email', 'password'], true));
        setIsEmailTouched(form.isFieldsTouched(['email'], true));
        setIsSendValues(!hasErrors && isTwoTouched);
        setDisabledForgot(!(!hasEmailError && isEmailTouched));

        setIsEmailHasError(hasEmailError);
    };
    const onFinish = (values: LoginValuesType) => {
        console.log('Received values of form: ', isSendValues && values);
    };
    return (
        <>
            <Form
                name='login'
                className={s.login_form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFieldsChange={handleFormChange}
                form={form}
            >
                <div className={s.inputs_wrapper}>
                    <div id={s.email_id} className={`${s[error_style]}`}>
                        <EmailInput dataAttribute='login-email' />
                    </div>
                    <Form.Item
                        className={s.password}
                        name='password'
                        rules={[
                            {
                                required: true,
                                validator: (_, value) => {
                                    if (
                                        !value ||
                                        /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(value)
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                                    );
                                },
                            },
                        ]}
                    >
                        <Input.Password
                            data-test-id='login-password'
                            type='password'
                            placeholder='Пароль'
                        />
                    </Form.Item>
                </div>

                <Form.Item className={s.remember_forgot}>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox data-test-id='login-remember'>
                            <Typography.Text>Запомнить меня</Typography.Text>
                        </Checkbox>
                    </Form.Item>

                    <Button
                        disabled={disabledForgot}
                        data-test-id='login-forgot-button'
                        type={'text'}
                    >
                        <Link className='login-form-forgot' to=''>
                            Забыли пароль?
                        </Link>
                    </Button>
                </Form.Item>

                <EnterButtons
                    dataAttribute='login-submit-button'
                    enterButtonBody='Войти'
                    googleButtonBody='Войти через Google'
                    className='login_buttons'
                    disabled={false}
                />
            </Form>
        </>
    );
};
