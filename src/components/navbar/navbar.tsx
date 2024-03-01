import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Layout, Menu, Typography } from 'antd';
import {
    CalendarTwoTone,
    HeartTwoTone,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyTwoTone,
} from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { exit, logoFit, logoFull } from './../../assets';
import { NavbarMenuItemsType } from './../../types';
import { PATHS } from '@constants/paths.ts';
import { screenSizes } from '@constants/sizes.ts';
import { useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { setIsNavbarCollapsed } from '@redux/reducers/layout-slice.ts';

import styles from './navbar.module.css';

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const isNavbarCollapsed = useAppSelector((state) => state.layout.isNavbarCollapsed);
    const screenWidth = useResize();
    const isMobileWidth = screenWidth <= screenSizes.mobileWidth;
    const siderWidth = isMobileWidth ? 106 : 208;

    useEffect(() => {
        isMobileWidth && dispatch(setIsNavbarCollapsed({ isNavbarCollapsed: true }));
    }, []);

    const switcherLeft =
        isMobileWidth && !isNavbarCollapsed
            ? 106
            : isMobileWidth && isNavbarCollapsed
            ? 0
            : isNavbarCollapsed
            ? 64
            : 208;
    const siderCollapsedWidth = isMobileWidth ? 0 : 64;
    const logo = isNavbarCollapsed && !isMobileWidth ? logoFit : logoFull;
    const logoWidth = isMobileWidth ? { width: 106 } : undefined;
    const logoPadding =
        isNavbarCollapsed && !isMobileWidth
            ? { paddingTop: 49, paddingBottom: 69 }
            : screenWidth <= screenSizes.mobileWidth
            ? { paddingTop: 8, paddingBottom: 22, paddingLeft: 0 }
            : undefined;

    const iconStyle = isMobileWidth
        ? { marginBottom: 10, paddingLeft: 8, paddingRight: 4 }
        : isNavbarCollapsed && !isMobileWidth
        ? { marginBottom: 17, paddingLeft: 21 }
        : { marginBottom: 17, paddingLeft: 16 };
    const getMenuIcon = (icon: ReactNode) => {
        return !isMobileWidth ? icon : null;
    };

    const items: NavbarMenuItemsType[] = [
        {
            key: '1',
            icon: getMenuIcon(<CalendarTwoTone className={styles.icon} />),
            label: 'Календарь',
            style: iconStyle,
        },
        {
            key: '2',
            icon: getMenuIcon(<HeartTwoTone className={styles.icon} />),
            label: 'Тренировки',
            style: iconStyle,
        },
        {
            key: '3',
            icon: getMenuIcon(<TrophyTwoTone className={styles.icon} />),
            label: 'Достижения',
            style: iconStyle,
        },
        {
            key: '4',
            icon: getMenuIcon(
                <IdcardOutlined style={{ color: '#061178' }} className={styles.icon_profile} />,
            ),
            label: 'Профиль',
            style: iconStyle,
        },
    ];

    const navigate = useNavigate();
    const onLogoutClick = () => {
        localStorage.clear();
        navigate(PATHS.AUTH);
    };

    return (
        <>
            <Layout.Sider
                theme='light'
                trigger={null}
                collapsible
                collapsed={isNavbarCollapsed}
                collapsedWidth={siderCollapsedWidth}
                width={siderWidth}
                className={styles.sidebar}
            >
                <div className={styles.logo} style={logoPadding}>
                    <img style={logoWidth} src={logo} alt='logo' />
                </div>
                <Menu mode='inline' defaultSelectedKeys={['']} items={items} />
                <div className={styles.exit}>
                    <Divider style={{ margin: 0 }} />
                    <Button
                        onClick={onLogoutClick}
                        className={styles.exit_btn}
                        size='middle'
                        type='text'
                        icon={isMobileWidth ? null : <img alt='exit' src={exit} />}
                    >
                        {isNavbarCollapsed ? null : (
                            <Typography.Text className={styles.exit_text}>Выход</Typography.Text>
                        )}
                    </Button>
                </div>
            </Layout.Sider>
            <div
                data-test-id={isMobileWidth ? 'sider-switch-mobile' : 'sider-switch'}
                style={{ left: switcherLeft }}
            >
                {React.createElement(isNavbarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: styles.trigger,
                    onClick: () =>
                        dispatch(setIsNavbarCollapsed({ isNavbarCollapsed: !isNavbarCollapsed })),
                })}
            </div>
        </>
    );
};
