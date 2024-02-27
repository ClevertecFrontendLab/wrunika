import { Layout, Button } from 'antd';
import { DownloadCard } from '@components/download-card';
import { WithCollapsedPropsType } from './../../types';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';

import styles from './footer-component.module.css';

export const FooterComponent = ({ navbarCollapsed }: WithCollapsedPropsType) => {
    const screenWidth = useResize();
    const changedPadding =
        screenWidth === screenSizes.tabletWidth && navbarCollapsed
            ? 'changed_padding'
            : 'footer_wrapper';
    return (
        <Layout.Footer style={{ padding: 0, backgroundColor: 'transparent' }}>
            <div className={`${styles.footer_wrapper} ${styles[changedPadding]}`}>
                <Button className={styles.review_btn} type='text'>
                    <span className={styles.footer_btn_text}>Смотреть отзывы</span>
                </Button>
                <DownloadCard />
            </div>
        </Layout.Footer>
    );
};
