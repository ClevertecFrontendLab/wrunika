import { Form, Input } from 'antd';
import { passwordRegex } from '@utils/regex.ts';

import styles from './password-inputs.module.css';

type PropsType = {
    placeholder: string;
    passwordDataAttribute: string;
    confirmDataAttribute: string;
};

export const PasswordInputs = ({
    placeholder,
    passwordDataAttribute,
    confirmDataAttribute,
}: PropsType) => {
    return (
        <div className={styles.passwords_wrapper}>
            <Form.Item
                className={`${styles.password} ${styles.new_password}`}
                name='password'
                help={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                rules={[
                    {
                        required: true,
                        validator: (_, value) => {
                            if (!value || passwordRegex.test(value)) {
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
                className={`${styles.password} ${styles.repeat_password}`}
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
