import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Form, Typography } from 'antd';
import { EnterBg } from '@components/enter-bg';
import { PasswordInputs } from '@components/password-inputs';
import { useButtonDisable } from '@hooks/useButtonDisable.ts';
import { useChangePasswordMutation } from '@redux/auth-api.ts';
import { Loader } from '@components/loader';
import { PATHS } from '@constants/paths.ts';
import { useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { ChangePasswordType } from './../../types';
import { setChangePasswordData } from '@redux/auth.slice.ts';

import styles from './auth-change-password.module.css';

export const AuthChangePassword = () => {
    const { form, disabled, handleFormChange } = useButtonDisable();
    const [sendNewPassword, { isLoading }] = useChangePasswordMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const changePasswordData = useAppSelector((state) => state.auth.changePasswordData);
    const prevPath = useAppSelector((state) => state.router.previousLocations);
    const onFinish = (values: ChangePasswordType) => {
        sendNewPassword(values)
            .unwrap()
            .then(() => {
                navigate(PATHS.SUCCESS_CHANGE_PASSWORD);
            })
            .catch(() => {
                dispatch(setChangePasswordData(values));
                navigate(PATHS.ERROR_CHANGE_PASSWORD);
            });
    };

    useEffect(() => {
        if (
            changePasswordData.confirmPassword &&
            changePasswordData.password &&
            prevPath &&
            prevPath[prevPath.length - 1].location?.pathname === PATHS.ERROR_CHANGE_PASSWORD
        ) {
            onFinish(changePasswordData);
        }
    }, [changePasswordData, prevPath]);

    if (prevPath && prevPath.length <= 1) {
        return <Navigate to={PATHS.AUTH} />;
    }

    return (
        <>
            {isLoading && <Loader />}
            <EnterBg>
                <div className={styles.wrapper}>
                    <Typography.Title className={styles.title}>
                        Восстановление аккаунта
                    </Typography.Title>
                    <Form
                        className={styles.form}
                        name='change-password'
                        onFinish={onFinish}
                        onFieldsChange={handleFormChange}
                        form={form}
                    >
                        <PasswordInputs
                            placeholder='Новый пароль'
                            passwordDataAttribute='change-password'
                            confirmDataAttribute='change-confirm-password'
                        />
                        <Button
                            data-test-id='change-submit-button'
                            type='primary'
                            htmlType='submit'
                            disabled={disabled}
                        >
                            Сохранить
                        </Button>
                    </Form>
                </div>
            </EnterBg>
        </>
    );
};
