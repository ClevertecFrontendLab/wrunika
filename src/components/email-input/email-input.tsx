import { ChangeEvent } from 'react';
import { Form, Input } from 'antd';
import { emailRegex } from '@utils/regex.ts';

type PropsType = {
    className?: string;
    dataAttribute: string;
    getEmailValue?: (value: string) => void;
};

export const EmailInput = ({ className, dataAttribute, getEmailValue }: PropsType) => {
    const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
        getEmailValue && getEmailValue(e.currentTarget.value);
    };
    return (
        <Form.Item
            className={className}
            name='email'
            rules={[{ required: true, pattern: emailRegex, message: '' }]}
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
