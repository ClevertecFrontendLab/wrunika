import { Button, Form } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { EnterButtonsPropsType } from './../../types';

import s from './enter-buttons.module.css';

export const EnterButtons = ({
    dataAttribute,
    enterButtonBody,
    googleButtonBody,
    className,
    disabled,
}: EnterButtonsPropsType) => {
    return (
        <Form.Item className={`${s[className]} ${s.buttons}`}>
            <Button
                data-test-id={dataAttribute}
                type='primary'
                htmlType='submit'
                disabled={disabled}
            >
                {enterButtonBody}
            </Button>
            <Button icon={<GooglePlusOutlined />}>{googleButtonBody}</Button>
        </Form.Item>
    );
};
