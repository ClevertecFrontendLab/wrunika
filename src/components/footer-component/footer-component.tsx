import { Layout, Button } from 'antd';
import { DownloadCard } from '@components/download-card';
import { WithCollapsedPropsType } from './../../types';

import s from './footer-component.module.css';
import { useResize } from '@hooks/useResize.ts';

export const FooterComponent = ({ navbarCollapsed }: WithCollapsedPropsType) => {
    const screenWidth = useResize();
    const changedPadding =
        screenWidth === 834 && navbarCollapsed ? 'changed_padding' : 'footer_wrapper';
    return (
        <Layout.Footer style={{ padding: 0, backgroundColor: 'transparent' }}>
            <div className={`${s.footer_wrapper} ${s[changedPadding]}`}>
                <Button className={s.review_btn} type='text'>
                    <span className={s.footer_btn_text}>Смотреть отзывы</span>
                </Button>
                <DownloadCard />
            </div>
        </Layout.Footer>
    );
};
