import { ReactNode } from 'react';

export type CardInfoType = {
    title: string;
    btnBody: string;
    icon: ReactNode;
};

export type NavbarMenuItemsType = {
    key: string;
    icon: ReactNode;
    label: string;
    style?: { marginBottom: number; paddingLeft: number };
};
