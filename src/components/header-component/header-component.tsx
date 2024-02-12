import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { WithCollapsedPropsType } from './../../types';

import s from './header-component.module.css';

export const HeaderComponent = ({ navbarCollapsed }: WithCollapsedPropsType) => {
    const screenWidth = useResize();
    const brFor834 = screenWidth === 834 && !navbarCollapsed && <br />;
    const brFor576 = screenWidth <= 576 && <br />;
    const settingIcon = screenWidth <= 834 ? null : <SettingOutlined />;

    return (
        <Layout.Header className={s.header_background}>
            <Breadcrumb className={s.breadcrumb}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={s.header_content}>
                <Typography.Title level={1} className={s.title}>
                    Приветствуем тебя {brFor576}в CleverFit — приложении, <br />
                    которое поможет тебе {brFor576}добиться своей {brFor834}мечты!
                </Typography.Title>
                {screenWidth <= 576 ? (
                    <Button className={s.settings_btn} shape='circle' icon={<SettingOutlined />} />
                ) : (
                    <Button className={s.settings_btn} type='text' icon={settingIcon}>
                        <Typography.Text>Настройки</Typography.Text>
                    </Button>
                )}
            </div>
        </Layout.Header>
    );
};
