import React, { ReactNode, useEffect, useState } from 'react';
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
import { NavbarMenuItemsType, NavbarPropsType } from './../../types';

import s from './navbar.module.css';

export const Navbar = ({ setNavbarCollapsed }: NavbarPropsType) => {
    const [collapsed, setCollapsed] = useState(false);
    const screenWidth = useResize();
    const isWidth576 = screenWidth <= 576;
    const siderWidth = isWidth576 ? 106 : 208;
    useEffect(() => {
        setNavbarCollapsed(collapsed);
    }, [collapsed, setNavbarCollapsed]);
    const switcherLeft =
        isWidth576 && !collapsed ? 106 : isWidth576 && collapsed ? 0 : collapsed ? 64 : 208;
    const siderCollapsedWidth = isWidth576 ? 0 : 64;
    const logo = collapsed && !isWidth576 ? logoFit : logoFull;
    const logoWidth = isWidth576 ? { width: 106 } : undefined;
    const logoPadding =
        collapsed && !isWidth576
            ? { paddingTop: 49, paddingBottom: 69 }
            : screenWidth <= 576
            ? { paddingTop: 8, paddingBottom: 22, paddingLeft: 0 }
            : undefined;
    const iconStyle = isWidth576
        ? { marginBottom: 10, paddingLeft: 8 }
        : collapsed && !isWidth576
        ? { marginBottom: 17, paddingLeft: 21 }
        : { marginBottom: 17, paddingLeft: 16 };
    const getMenuIcon = (icon: ReactNode) => {
        return !isWidth576 ? icon : null;
    };

    const items: NavbarMenuItemsType[] = [
        {
            key: '1',
            icon: getMenuIcon(<CalendarTwoTone className={s.icon} />),
            label: 'Календарь',
            style: iconStyle,
        },
        {
            key: '2',
            icon: getMenuIcon(<HeartTwoTone className={s.icon} />),
            label: 'Тренировки',
            style: iconStyle,
        },
        {
            key: '3',
            icon: getMenuIcon(<TrophyTwoTone className={s.icon} />),
            label: 'Достижения',
            style: iconStyle,
        },
        {
            key: '4',
            icon: getMenuIcon(
                <IdcardOutlined style={{ color: '#061178' }} className={s.icon_profile} />,
            ),
            label: 'Профиль',
            style: iconStyle,
        },
    ];

    return (
        <>
            <Layout.Sider
                theme='light'
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={siderCollapsedWidth}
                width={siderWidth}
                className={s.sidebar}
            >
                <div className={s.logo} style={logoPadding}>
                    <img style={logoWidth} src={logo} alt='logo' />
                </div>
                <Menu mode='inline' defaultSelectedKeys={['']} items={items} />
                <div className={s.exit}>
                    <Divider style={{ margin: 0 }} />
                    <Button
                        className={s.exit_btn}
                        size='middle'
                        type='text'
                        icon={isWidth576 ? null : <img alt='exit' src={exit} />}
                    >
                        {collapsed ? null : (
                            <Typography.Text className={s.exit_text}>Выход</Typography.Text>
                        )}
                    </Button>
                </div>
            </Layout.Sider>
            <div
                data-test-id={isWidth576 ? 'sider-switch-mobile' : 'sider-switch'}
                style={{ left: switcherLeft }}
            >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: s.trigger,
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
        </>
    );
};
