import { Form, Input } from 'antd';
import { PasswordInputsPropsType } from './../../types';

import s from './password-inputs.module.css';

export const PasswordInputs = ({
    placeholder,
    passwordDataAttribute,
    confirmDataAttribute,
}: PasswordInputsPropsType) => {
    return (
        <div className={s.passwords_wrapper}>
            <Form.Item
                className={`${s.password} ${s.new_password}`}
                name='password'
                help={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                rules={[
                    {
                        required: true,
                        validator: (_, value) => {
                            if (!value || /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(value)) {
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
                    data-test-id={passwordDataAttribute}
                    type='password'
                    placeholder={placeholder}
                />
            </Form.Item>

            <Form.Item
                className={`${s.password} ${s.repeat_password}`}
                name='confirmPassword'
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, подтвердите пароль',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    type='password'
                    placeholder='Повторите пароль'
                    data-test-id={confirmDataAttribute}
                />
            </Form.Item>
        </div>
    );
};
