import { Button, Form } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';

import styles from './enter-buttons.module.css';

type PropsType = {
    dataAttribute?: string;
    enterButtonBody: string;
    googleButtonBody: string;
    loginWithGoogle?: () => void;
    className: 'login_buttons' | 'registration_buttons';
    disabled: boolean;
};

export const EnterButtons = ({
    dataAttribute,
    enterButtonBody,
    googleButtonBody,
    loginWithGoogle,
    className,
    disabled,
}: PropsType) => {
    const screenWidth = useResize();
    const btnIcon = screenWidth >= screenSizes.mobileWidth ? <GooglePlusOutlined /> : null;
    return (
        <Form.Item className={`${styles[className]} ${styles.buttons}`}>
            <Button
                data-test-id={dataAttribute}
                type='primary'
                htmlType='submit'
                disabled={disabled}
            >
                {enterButtonBody}
            </Button>
            <Button onClick={loginWithGoogle} icon={btnIcon}>
                {googleButtonBody}
            </Button>
        </Form.Item>
    );
};
