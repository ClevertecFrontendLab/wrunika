import { ReactNode } from 'react';
import { ResultStatusType } from 'antd/es/result';

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

export type EnterBgPropsType = {
    children: ReactNode;
};

export type ResultCardPropsType = {
    status: ResultStatusType;
    title: string;
    subTitle: string;
    btnTitle: string;
    dataAttribute?: string;
    className:
        | 'error_style'
        | 'unsuccessful_style'
        | 'successful_style'
        | 'error_registration'
        | 'error_email_no_exist'
        | 'error_change_password'
        | 'success_change_password'
        | 'error_check_email'
        | 'confirm_email'
        | 'error_confirm_email';
};

export type PasswordInputsPropsType = {
    placeholder: string;
    passwordDataAttribute: string;
    confirmDataAttribute: string;
};

export type EnterButtonsPropsType = {
    dataAttribute?: string;
    enterButtonBody: string;
    googleButtonBody: string;
    className: 'login_buttons' | 'registration_buttons';
    disabled: boolean;
};

export type EmailInputPropsType = {
    className?: string;
    dataAttribute: string;
};
