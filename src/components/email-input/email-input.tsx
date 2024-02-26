import { ChangeEvent } from 'react';
import { Form, Input } from 'antd';
import { EmailInputPropsType } from './../../types';

export const EmailInput = ({ className, dataAttribute, getEmailValue }: EmailInputPropsType) => {
    const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
        getEmailValue && getEmailValue(e.currentTarget.value);
    };
    return (
        <Form.Item
            className={className}
            name='email'
            rules={[{ required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: '' }]}
        >
            <Input
                onChange={getEmail}
                type='email'
                data-test-id={dataAttribute}
                addonBefore={'e-mail:'}
            />
        </Form.Item>
    );
};
