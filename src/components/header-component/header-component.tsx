import { Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { IsMainPagePropsType } from './../../types';
import { screenSizes } from '@constants/sizes.ts';
import { useAppSelector } from '@redux/configure-store.ts';
import { Breadcrumbs } from '@components/breadcrumbs';

import styles from './header-component.module.css';

export const HeaderComponent = ({ isMainPage }: IsMainPagePropsType) => {
    const isNavbarCollapsed = useAppSelector((state) => state.layout.isNavbarCollapsed);
    const screenWidth = useResize();
    const brForTablet = screenWidth === screenSizes.tabletWidth && !isNavbarCollapsed && <br />;
    const brForMobile = screenWidth <= screenSizes.mobileWidth && <br />;
    const settingIcon = screenWidth <= screenSizes.tabletWidth ? null : <SettingOutlined />;

    return (
        <Layout.Header className={styles.header_background}>
            <Breadcrumbs />
            {isMainPage && (
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
            )}
        </Layout.Header>
    );
};
