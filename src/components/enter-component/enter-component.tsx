import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { logo } from './../../assets';
import { EnterBg } from '@components/enter-bg';
import { Registration } from '@components/registration';
import { Login } from '@components/login';
import { PATHS } from '@constants/paths.ts';

import './enter-component.css';
import styles from './enter-component.module.css';

type PropsType = {
    tabForLogin?: ReactNode;
    tabForRegistration?: ReactNode;
    defaultActiveKey?: 'login' | 'registration';
    marginTop?: number;
    marginBottom?: number;
};

export const EnterComponent = ({
    defaultActiveKey = 'login',
    tabForLogin = <Login />,
    tabForRegistration = <Registration />,
    marginTop,
    marginBottom,
}: PropsType) => {
    const items = [
        { label: 'Вход', key: 'login', children: tabForLogin },
        { label: 'Регистрация', key: 'registration', children: tabForRegistration },
    ];
    const navigate = useNavigate();
    const changeTab = (key: string) => {
        if (key === 'login') navigate(PATHS.AUTH);
        if (key === 'registration') navigate(PATHS.REGISTRATION);
    };
    return (
        <EnterBg>
            <div
                style={{ marginTop: marginTop, marginBottom: marginBottom }}
                className={styles.card}
            >
                <div className={styles.logo_wrapper}>
                    <img className={styles.logo_img} src={logo} alt='logo' />
                </div>
                <Tabs
                    onTabClick={changeTab}
                    className={styles.tabs}
                    defaultActiveKey={defaultActiveKey}
                    items={items}
                />
            </div>
        </EnterBg>
    );
};
