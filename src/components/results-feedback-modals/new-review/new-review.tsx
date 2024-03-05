import { ChangeEvent } from 'react';
import { Button, Card, Divider, Form, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Rating } from '@components/rating';
import {
    setIsModalErrorPostReviewOpen,
    setIsModalNewReviewOpen,
    setIsModalSuccessPostReviewOpen,
    setRatingValue,
    setReviewValue,
} from '@redux/reducers';
import { useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { usePostReviewMutation } from '@redux/api';
import { Loader } from '@components/loader';
import { ModalComponent } from '@components/modal-component';
import { ErrorPostReview, SuccessPostReview } from '@components/results-feedback-modals';

import styles from './new-review.module.css';

export const NewReview = () => {
    const [form] = Form.useForm();
    const [addReview, { isLoading }] = usePostReviewMutation();
    const dispatch = useAppDispatch();
    const ratingValue = useAppSelector((state) => state.feedback.ratingValue);
    const reviewValue = useAppSelector((state) => state.feedback.reviewValue);
    const isModalSuccessPostReviewOpen = useAppSelector(
        (state) => state.feedback.isModalSuccessPostReviewOpen,
    );
    const isModalErrorPostReviewOpen = useAppSelector(
        (state) => state.feedback.isModalErrorPostReviewOpen,
    );
    const isDisabled = ratingValue === 0;
    const clearCommentValue = () => {
        dispatch(setRatingValue({ ratingValue: 0 }));
        dispatch(setReviewValue({ reviewValue: '' }));
        form.resetFields();
    };
    const onModalClose = () => {
        clearCommentValue();
        dispatch(setIsModalNewReviewOpen({ isOpen: false }));
    };
    const setCommentValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setReviewValue({ reviewValue: e.currentTarget.value }));
    };
    const onFinish = (values: { message: string }) => {
        addReview({ message: values.message, rating: ratingValue })
            .unwrap()
            .then(() => {
                onModalClose();
                dispatch(setIsModalSuccessPostReviewOpen({ isOpen: true }));
            })
            .catch(() => {
                dispatch(setIsModalErrorPostReviewOpen({ isOpen: true }));
                dispatch(setIsModalNewReviewOpen({ isOpen: false }));
            });
    };
    return (
        <div>
            {isLoading && <Loader />}
            <Card
                className={styles.card_wrapper}
                extra={<Button onClick={onModalClose} icon={<CloseOutlined />} type={'text'} />}
                title='Ваш отзыв'
                bordered={false}
            >
                <Form
                    form={form}
                    className={styles.form_wrapper}
                    name='new-review'
                    onFinish={onFinish}
                >
                    <Form.Item>
                        <Rating disabled={false} rating={ratingValue} starSize={24} />
                    </Form.Item>
                    <Form.Item name={'message'}>
                        <Input.TextArea
                            value={reviewValue}
                            onChange={setCommentValue}
                            autoSize
                            placeholder='Расскажите, почему Вам понравилось наше приложение'
                            style={{ minHeight: 46 }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            data-test-id='new-review-submit-button'
                            disabled={isDisabled}
                            type='primary'
                            htmlType='submit'
                        >
                            Опубликовать
                        </Button>
                    </Form.Item>
                </Form>
                <Divider style={{ margin: 0, position: 'absolute', bottom: 60 }} />
            </Card>
            <ModalComponent
                style={'success_post_review'}
                isModalOpen={isModalSuccessPostReviewOpen}
            >
                <SuccessPostReview />
            </ModalComponent>
            <ModalComponent isModalOpen={isModalErrorPostReviewOpen} style={'error_post_review'}>
                <ErrorPostReview />
            </ModalComponent>
        </div>
    );
};
