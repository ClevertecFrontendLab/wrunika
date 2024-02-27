import { ReactNode } from 'react';
import { Button, Divider, Space, Typography } from 'antd';

import styles from './action-card.module.css';

type PropsType = {
    title: string;
    btnBody: string;
    icon: ReactNode;
    changedSize: 'changed_width_182px' | 'changed_width_230px';
};

export const ActionCard = ({ title, btnBody, icon, changedSize }: PropsType) => {
    return (
        <Space direction='vertical' size={0} className={`${styles.action} ${styles[changedSize]}`}>
            <Typography.Paragraph style={{ margin: 0 }} className={styles.action_title}>
                {title}
            </Typography.Paragraph>
            <Divider style={{ margin: 0 }} />
            <div className={styles.action_btn_wrapper}>
                <Button type='text' icon={icon}>
                    <span className={styles.action_btn_text}>{btnBody}</span>
                </Button>
            </div>
        </Space>
    );
};
