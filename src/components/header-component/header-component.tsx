import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { WithCollapsedPropsType } from './../../types';
import { screenSizes } from '@constants/sizes.ts';

import styles from './header-component.module.css';

export const HeaderComponent = ({ navbarCollapsed }: WithCollapsedPropsType) => {
    const screenWidth = useResize();
    const brForTablet = screenWidth === screenSizes.tabletWidth && !navbarCollapsed && <br />;
    const brForMobile = screenWidth <= screenSizes.mobileWidth && <br />;
    const settingIcon = screenWidth <= screenSizes.tabletWidth ? null : <SettingOutlined />;

    return (
        <Layout.Header className={styles.header_background}>
            <Breadcrumb className={styles.breadcrumb}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.header_content}>
                <Typography.Title level={1} className={styles.title}>
                    Приветствуем тебя {brForMobile}в CleverFit — приложении, <br />
                    которое поможет тебе {brForMobile}добиться своей {brForTablet}мечты!
                </Typography.Title>
                {screenWidth <= screenSizes.mobileWidth ? (
                    <Button
                        className={styles.settings_btn}
                        shape='circle'
                        icon={<SettingOutlined />}
                    />
                ) : (
                    <Button className={styles.settings_btn} type='text' icon={settingIcon}>
                        <Typography.Text>Настройки</Typography.Text>
                    </Button>
                )}
            </div>
        </Layout.Header>
    );
};
