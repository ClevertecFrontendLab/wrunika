import React from 'react';
import { Layout } from 'antd';
import { HeaderComponent } from '@components/header-component';
import { MainContent } from '@components/main-content';
import { FooterComponent } from '@components/footer-component';
import { Navbar } from '@components/navbar';

import s from './main-page.module.css';

export const MainPage: React.FC = () => {
    return (
        <Layout className={s.main_layout}>
            <Navbar />
            <Layout style={{ backgroundColor: 'transparent' }} className={s.site_layout}>
                <HeaderComponent />
                <MainContent />
                <FooterComponent />
            </Layout>
        </Layout>
    );
};
