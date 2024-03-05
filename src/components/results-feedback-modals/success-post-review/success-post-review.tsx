import { Button, Result } from 'antd';
import { useAppDispatch } from '@redux/configure-store.ts';
import { setIsModalSuccessPostReviewOpen } from '@redux/reducers';

import styles from './success-post-review.module.css';

export const SuccessPostReview = () => {
    const dispatch = useAppDispatch();
    const onModalClose = () => {
        dispatch(setIsModalSuccessPostReviewOpen({ isOpen: false }));
    };
    return (
        <Result
            className={styles.success}
            status={'success'}
            title={'Отзыв успешно опубликован'}
            extra={
                <Button onClick={onModalClose} type='primary'>
                    <span>Отлично</span>
                </Button>
            }
        />
    );
};
