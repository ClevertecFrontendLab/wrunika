import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { DownloadCard } from '@components/download-card';
import { IsMainPagePropsType } from './../../types';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';
import { PATHS } from '@constants/paths.ts';
import { useAppSelector } from '@redux/configure-store.ts';

import styles from './footer-component.module.css';

export const FooterComponent = ({ isMainPage }: IsMainPagePropsType) => {
    const isNavbarCollapsed = useAppSelector((state) => state.layout.isNavbarCollapsed);
    const screenWidth = useResize();
    const changedPadding =
        screenWidth === screenSizes.tabletWidth && isNavbarCollapsed
            ? 'changed_padding'
            : 'footer_wrapper';

    return (
        <>
            <Layout.Footer style={{ padding: 0, backgroundColor: 'transparent' }}>
                {isMainPage && (
                    <div className={`${styles.footer_wrapper} ${styles[changedPadding]}`}>
                        <Button
                            data-test-id='see-reviews'
                            className={styles.review_btn}
                            type='text'
                        >
                            <Link to={PATHS.FEEDBACK} className={styles.footer_btn_text}>
                                Смотреть отзывы
                            </Link>
                        </Button>
                        <DownloadCard />
                    </div>
                )}
            </Layout.Footer>
        </>
    );
};
