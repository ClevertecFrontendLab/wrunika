import { EnterBgPropsType } from './../../types';

import s from './enter-bg.module.css';

export const EnterBg = ({ children }: EnterBgPropsType) => {
    return <div className={s.bg_wrapper}>{children}</div>;
};
