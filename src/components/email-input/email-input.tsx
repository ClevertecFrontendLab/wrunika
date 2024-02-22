import { Form, Input } from 'antd';
import { EmailInputPropsType } from './../../types';

export const EmailInput = ({ className, dataAttribute }: EmailInputPropsType) => {
    return (
        <Form.Item
            className={className}
            name='email'
            rules={[{ required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: '' }]}
        >
            <Input type='email' data-test-id={dataAttribute} addonBefore={'e-mail:'} />
        </Form.Item>
    );
};
