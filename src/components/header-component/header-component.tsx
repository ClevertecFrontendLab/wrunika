import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import s from './header-component.module.css';

export const HeaderComponent = () => {
    return (
        <Layout.Header className={s.header_background}>
            <Breadcrumb className={s.breadcrumb}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={s.header_content}>
                <Typography.Title level={1} className={s.title}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Typography.Title>
                <Button className={s.settings_btn} type='text' icon={<SettingOutlined />}>
                    <Typography.Text className={s.settings_title}>Настройки</Typography.Text>
                </Button>
            </div>
        </Layout.Header>
    );
};
