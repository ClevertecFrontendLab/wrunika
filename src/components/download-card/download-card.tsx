import { Button, Divider, Space, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import s from './download-card.module.css';

export const DownloadCard = () => {
    return (
        <Space direction='vertical' size={0} className={s.download_card}>
            <div className={s.download_body}>
                <Typography.Text className={s.download_title}>Скачать на телефон</Typography.Text>
                <Typography.Text className={s.available_title}>
                    Доступно в PRO-тарифе
                </Typography.Text>
            </div>
            <Divider style={{ margin: 0 }} />
            <Space size={0} className={s.download_btns_wrapper}>
                <Button
                    className={s.download_btn}
                    type='text'
                    icon={<AndroidFilled className={'download-icon'} />}
                >
                    <Typography.Text className={s.download_btn_text}>Android OS</Typography.Text>
                </Button>
                <Button
                    className={s.download_btn}
                    type='text'
                    icon={<AppleFilled className={'download-icon'} />}
                >
                    <Typography.Text className={s.download_btn_text}>Apple IOS</Typography.Text>
                </Button>
            </Space>
        </Space>
    );
};
