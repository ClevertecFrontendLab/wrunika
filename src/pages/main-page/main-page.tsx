import React, { useState } from 'react';
import { Layout } from 'antd';
import { HeaderComponent } from '@components/header-component';
import { MainContent } from '@components/main-content';
import { FooterComponent } from '@components/footer-component';
import { Navbar } from '@components/navbar';

import s from './main-page.module.css';

export const MainPage: React.FC = () => {
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);
    return (
        <Layout className={s.main_layout}>
            <Navbar setNavbarCollapsed={setNavbarCollapsed} />
            <Layout style={{ backgroundColor: 'transparent' }} className={s.site_layout}>
                <HeaderComponent navbarCollapsed={navbarCollapsed} />
                <MainContent navbarCollapsed={navbarCollapsed} />
                <FooterComponent navbarCollapsed={navbarCollapsed} />
            </Layout>
        </Layout>
    );
};
