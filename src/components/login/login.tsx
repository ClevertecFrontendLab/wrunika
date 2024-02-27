import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { EnterButtons } from '@components/enter-buttons';
import { EmailInput } from '@components/email-input';
import { LoginValuesType } from './../../types';
import { useCheckEmailMutation, useLoginMutation } from '@redux/auth-api.ts';
import { Loader } from '@components/loader';
import { PATHS } from '@constants/paths.ts';
import { history, useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { setEmailForForgot } from '@redux/auth.slice.ts';
import { ERROR_STATUS } from '@constants/error-status.ts';
import { passwordRegex } from '@utils/regex.ts';

import './login.css';
import styles from './login.module.css';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [sendLoginData, { isLoading }] = useLoginMutation();
    const [sendCheckEmailRequest, { isLoading: isCheckEmailLoading }] = useCheckEmailMutation();
    const prevPath = useAppSelector((state) => state.router.previousLocations);
    const emailForForgot = useAppSelector((state) => state.auth.emailForForgot);
    const [form] = Form.useForm();
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [disabledForgot, setDisabledForgot] = useState(false);

    const [isEmailHasError, setIsEmailHasError] = useState(false);
    const error_style = isEmailHasError ? 'email_error' : 'no_error';

    const getEmail = (value: string) => {
        dispatch(setEmailForForgot({ email: value }));
    };
    const handleFormChange = () => {
        const hasEmailError = form.getFieldsError(['email']).some(({ errors }) => errors.length);
        setIsEmailTouched(form.isFieldsTouched(['email'], true));
        setDisabledForgot(!(!hasEmailError && isEmailTouched));
        setIsEmailHasError(hasEmailError);
    };
    const sendRequestIfForgot = (value: string) => {
        sendCheckEmailRequest({ email: value })
            .unwrap()
            .then(() => {
                setEmailForForgot({ email: value });
                navigate(PATHS.CONFIRM_EMAIL);
            })
            .catch((e) => {
                if (e.status === ERROR_STATUS.NOT_FOUND && e.data.message === 'Email не найден') {
                    navigate(PATHS.EMAIL_NO_EXIST);
                } else {
                    dispatch(setEmailForForgot({ email: value }));
                    history.push(PATHS.ERROR_CHECK_EMAIL);
                }
            });
    };

    const onClickForgotBtn = () => {
        if (!isEmailTouched || isEmailHasError) {
            setDisabledForgot(true);
        }
        if (isEmailTouched && !isEmailHasError) {
            sendRequestIfForgot(emailForForgot.email);
        }
    };
    const onFinish = (values: LoginValuesType) => {
        sendLoginData({ email: values.email, password: values.password })
            .unwrap()
            .then((res) => {
                if (values.remember) {
                    localStorage.setItem('accessToken', res.accessToken);
                } else {
                    sessionStorage.setItem('accessToken', res.accessToken);
                }
                navigate(PATHS.MAIN);
            })
            .catch(() => {
                navigate(PATHS.ERROR_LOGIN);
            });
    };

    useEffect(() => {
        if (
            emailForForgot.email &&
            prevPath &&
            prevPath[prevPath.length - 1].location?.pathname === PATHS.ERROR_CHECK_EMAIL
        ) {
            sendRequestIfForgot(emailForForgot.email);
        }
    }, [emailForForgot.email, prevPath]);

    if (localStorage.getItem('accessToken')) {
        return <Navigate to={PATHS.MAIN} />;
    }
    return (
        <>
            {(isLoading || isCheckEmailLoading) && <Loader />}
            <Form
                name='login'
                className={styles.login_form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFieldsChange={handleFormChange}
                form={form}
            >
                <div className={styles.inputs_wrapper}>
                    <div id={styles.email_id} className={`${styles[error_style]}`}>
                        <EmailInput getEmailValue={getEmail} dataAttribute='login-email' />
                    </div>
                    <Form.Item
                        className={styles.password}
                        name='password'
                        rules={[
                            {
                                required: true,
                                validator: (_, value) => {
                                    if (passwordRegex.test(value)) {
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

                <Form.Item className={styles.remember_forgot}>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox data-test-id='login-remember'>
                            <Typography.Text>Запомнить меня</Typography.Text>
                        </Checkbox>
                    </Form.Item>

                    <Button
                        disabled={disabledForgot}
                        data-test-id='login-forgot-button'
                        type={'text'}
                        onClick={onClickForgotBtn}
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
