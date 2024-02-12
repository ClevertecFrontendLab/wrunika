import { Button, Divider, Space, Typography } from 'antd';
import { ActionCardPropsType } from './../../types';

import s from './action-card.module.css';

export const ActionCard = ({ title, btnBody, icon, changedSize }: ActionCardPropsType) => {
    return (
        <Space direction='vertical' size={0} className={`${s.action} ${s[changedSize]}`}>
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
