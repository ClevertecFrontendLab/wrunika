import { ReactNode } from 'react';

export type ActionCardPropsType = {
    title: string;
    btnBody: string;
    icon: ReactNode;
    changedSize: 'changed_size182' | 'changed_size230';
};

export type WithCollapsedPropsType = {
    navbarCollapsed: boolean;
};

export type NavbarPropsType = {
    setNavbarCollapsed: (collapsed: boolean) => void;
};
