import { Button, Divider, Space, Typography } from 'antd';
import { ReactNode } from 'react';
import s from './action-card.module.css';

type PropsType = {
    title: string;
    btnBody: string;
    icon: ReactNode;
};

export const ActionCard = ({ title, btnBody, icon }: PropsType) => {
    return (
        <Space direction='vertical' size={0} className={s.action}>
            <Typography.Paragraph style={{ margin: 0 }} className={s.action_title}>
                {title}
            </Typography.Paragraph>
            <Divider style={{ margin: 0 }} />
            <div className={s.action_btn_wrapper}>
                <Button type='text' icon={icon}>
                    <span className={s.action_btn_text}>{btnBody}</span>
                </Button>
            </div>
        </Space>
    );
};
