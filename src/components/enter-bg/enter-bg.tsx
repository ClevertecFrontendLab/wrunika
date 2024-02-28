import { ReactNode } from 'react';

import styles from './enter-bg.module.css';

type PropsType = {
    children: ReactNode;
};

export const EnterBg = ({ children }: PropsType) => (
    <div className={styles.bg_wrapper}>{children}</div>
);
