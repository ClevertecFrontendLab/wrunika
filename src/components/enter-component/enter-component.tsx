import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { logo } from './../../assets';
import { EnterBg } from '@components/enter-bg';
import { Registration } from '@components/registration';
import { Login } from '@components/login';
import { EnterComponentPropsType } from './../../types';
import { PATHS } from '@constants/paths.ts';

import './enter-component.css';
import s from './enter-component.module.css';

export const EnterComponent = ({
    defaultActiveKey = 'item-1',
    child1 = <Login />,
    child2 = <Registration />,
    marginTop,
    marginBottom,
}: EnterComponentPropsType) => {
    const items = [
        { label: 'Вход', key: 'item-1', children: child1 },
        { label: 'Регистрация', key: 'item-2', children: child2 },
    ];
    const navigate = useNavigate();
    const changeTab = (key: string) => {
        if (key === 'item-1') navigate(PATHS.AUTH);
        if (key === 'item-2') navigate(PATHS.REGISTRATION);
    };
    return (
        <EnterBg>
            <div style={{ marginTop: marginTop, marginBottom: marginBottom }} className={s.card}>
                <div className={s.logo_wrapper}>
                    <img className={s.logo_img} src={logo} alt='logo' />
                </div>
                <Tabs
                    onTabClick={changeTab}
                    className={s.tabs}
                    defaultActiveKey={defaultActiveKey}
                    items={items}
                />
            </div>
        </EnterBg>
    );
};
