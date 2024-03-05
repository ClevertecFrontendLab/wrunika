import { Button, Result } from 'antd';
import { useAppDispatch } from '@redux/configure-store.ts';
import { setIsModalErrorPostReviewOpen, setIsModalNewReviewOpen } from '@redux/reducers';

import styles from './error-post-review.module.css';

export const ErrorPostReview = () => {
    const dispatch = useAppDispatch();
    const onWriteReviewClick = () => {
        dispatch(setIsModalErrorPostReviewOpen({ isOpen: false }));
        dispatch(setIsModalNewReviewOpen({ isOpen: true }));
    };
    const onModalClose = () => {
        //clear();
        dispatch(setIsModalErrorPostReviewOpen({ isOpen: false }));
    };
    return (
        <Result
            className={styles.error}
            status={'error'}
            title={'Данные не сохранились'}
            subTitle={'Что-то пошло не так. Попробуйте ещё раз.'}
            extra={
                <div className={styles.buttons_wrapper}>
                    <Button
                        data-test-id='write-review-not-saved-modal'
                        onClick={onWriteReviewClick}
                        type='primary'
                    >
                        <span>Написать отзыв</span>
                    </Button>
                    <Button onClick={onModalClose}>
                        <span>Закрыть</span>
                    </Button>
                </div>
            }
        />
    );
};
