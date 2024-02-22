import { Button, Form } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { EnterButtonsPropsType } from './../../types';
import { useResize } from '@hooks/useResize.ts';

import s from './enter-buttons.module.css';

export const EnterButtons = ({
    dataAttribute,
    enterButtonBody,
    googleButtonBody,
    className,
    disabled,
}: EnterButtonsPropsType) => {
    const screenWidth = useResize();
    const btnIcon = screenWidth >= 576 ? <GooglePlusOutlined /> : null;
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
            <Button icon={btnIcon}>{googleButtonBody}</Button>
        </Form.Item>
    );
};
