import { Layout, Button } from 'antd';
import { DownloadCard } from '@components/download-card';

import s from './footer-component.module.css';

export const FooterComponent = () => {
    return (
        <Layout.Footer style={{ padding: 0, backgroundColor: 'transparent' }}>
            <div className={s.footer_wrapper}>
                <Button className={s.review_btn} type='text'>
                    <span className={s.footer_btn_text}>Смотреть отзывы</span>
                </Button>
                <DownloadCard />
            </div>
        </Layout.Footer>
    );
};
