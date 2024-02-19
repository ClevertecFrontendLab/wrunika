import { Button, Form, Typography } from 'antd';
import { EnterBg } from '@components/enter-bg';
import { PasswordInputs } from '@components/password-inputs';
import { useButtonDisable } from '@hooks/useButtonDisable.ts';

import s from './auth-change-password.module.css';

export const AuthChangePassword = () => {
    const { form, disabled, handleFormChange } = useButtonDisable();
    const onFinish = (values: { password: string }) => {
        console.log('Received values of form: ', values.password);
    };
    return (
        <EnterBg>
            <div className={s.wrapper}>
                <Typography.Title className={s.title}>Восстановление аккауанта</Typography.Title>
                <Form
                    className={s.form}
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
    );
};
