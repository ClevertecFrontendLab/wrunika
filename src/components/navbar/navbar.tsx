import { Button, Divider, Layout, Menu, Typography } from 'antd';
import {
    CalendarTwoTone,
    HeartTwoTone,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyTwoTone,
} from '@ant-design/icons';
import { exit, logoFit, logoFull } from './../../assets';
import React, { ReactNode, useState } from 'react';

import s from './navbar.module.css';

type ItemsType = {
    key: string;
    icon: ReactNode;
    label: string;
    style?: { marginBottom: number; paddingLeft: number };
};

export const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const logo = collapsed ? logoFit : logoFull;
    const logoPadding = collapsed ? { paddingTop: 49, paddingBottom: 69 } : undefined;
    const iconStyle = collapsed
        ? { marginBottom: 17, paddingLeft: 21 }
        : { marginBottom: 17, paddingLeft: 16 };

    const items: ItemsType[] = [
        {
            key: '1',
            icon: <CalendarTwoTone className={s.icon} />,
            label: 'Календарь',
            style: iconStyle,
        },
        {
            key: '2',
            icon: <HeartTwoTone className={s.icon} />,
            label: 'Тренировки',
            style: iconStyle,
        },
        {
            key: '3',
            icon: <TrophyTwoTone className={s.icon} />,
            label: 'Достижения',
            style: iconStyle,
        },
        {
            key: '4',
            icon: <IdcardOutlined style={{ color: '#061178' }} className={s.icon_profile} />,
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
                collapsedWidth={64}
                width={208}
                className={s.sidebar}
            >
                <div className={s.logo} style={logoPadding}>
                    <img src={logo} alt='logo' />
                </div>
                <Menu style={{}} mode='inline' defaultSelectedKeys={['']} items={items} />
                <div className={s.exit}>
                    <Divider style={{ margin: 0 }} />
                    <Button
                        className={s.exit_btn}
                        size='middle'
                        type='text'
                        icon={<img alt='exit' src={exit} />}
                    >
                        {collapsed ? null : (
                            <Typography.Text className={s.exit_text}>Выход</Typography.Text>
                        )}
                    </Button>
                </div>
            </Layout.Sider>
            <div data-test-id='sider-switch'>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: s.trigger,
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
        </>
    );
};
