import { Button, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';
import { setIsModalNewReviewOpen } from '@redux/reducers';

import styles from './no-reviews-component.module.css';

export const NoReviewsComponent = () => {
    const dispatch = useAppDispatch();
    const isNavbarCollapsed = useAppSelector((state) => state.layout.isNavbarCollapsed);

    const screenWidth = useResize();
    const no_reviews_style =
        isNavbarCollapsed && screenWidth > screenSizes.mobileWidth ? styles.collapsed : undefined;

    const onModalOpen = () => {
        dispatch(setIsModalNewReviewOpen({ isOpen: true }));
    };

    return (
        <>
            <div className={`${styles.no_reviews_wrapper} ${no_reviews_style}`}>
                <Typography.Title className={styles.no_reviews_title} level={3}>
                    Оставьте свой отзыв первым
                </Typography.Title>
                <Typography.Paragraph className={styles.no_reviews_text} type={'secondary'}>
                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении. Поделитесь
                    своим мнением и опытом с другими пользователями, и помогите им сделать
                    правильный выбор.
                </Typography.Paragraph>
            </div>
            <Button
                data-test-id='write-review'
                type={'primary'}
                className={`${styles.write_reviews_btn} ${no_reviews_style}`}
                onClick={onModalOpen}
            >
                Написать отзыв
            </Button>
        </>
    );
};
