import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { LayoutComponent } from '@components/layout-component';
import { ReviewComponent } from '@components/review-component';
import { NoReviewsComponent } from '@components/no-reviews-component';
import { useAppDispatch, useAppSelector } from '@redux/configure-store.ts';
import { PATHS } from '@constants/paths.ts';
import { setIsModalError500Open, setIsModalNewReviewOpen } from '@redux/reducers';
import { ModalComponent } from '@components/modal-component';
import { Error500, NewReview } from '@components/results-feedback-modals';
import { useGetFeedbackQuery } from '@redux/api';
import { Loader } from '@components/loader';
import { ERROR_STATUS } from '@constants/error-status.ts';

import styles from './feedback-page.module.css';

export const FeedbackPage = () => {
    const [isShowAllReviews, setIsShowAllReviews] = useState(false);
    const { data, isLoading, isFetching, error } = useGetFeedbackQuery();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const prevPath = useAppSelector((state) => state.router.previousLocations);
    const isModalNewReviewOpen = useAppSelector((state) => state.feedback.isModalNewReviewOpen);
    const isModalError500Open = useAppSelector((state) => state.feedback.isModalError500Open);
    const reviewValue = useAppSelector((state) => state.feedback.reviewValue);

    const newReviewStyle = reviewValue ? 'writing_review' : 'add_new_review';
    const sortedReviews = data
        ? [...data].sort(
              (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
          )
        : [];
    const portionReviewsForShow = isShowAllReviews ? sortedReviews : sortedReviews.slice(0, 4);

    const btnTitle = isShowAllReviews ? 'Свернуть все отзывы' : 'Развернуть все отзывы';
    const buttonsStyle = isShowAllReviews ? 'buttons_with_all_reviews' : undefined;
    const reviewsStyle = isShowAllReviews ? 'all_reviews_shown' : undefined;

    const showAllReviews = () => {
        setIsShowAllReviews(!isShowAllReviews);
    };

    const onModalOpen = () => {
        dispatch(setIsModalNewReviewOpen({ isOpen: true }));
    };

    useEffect(() => {
        if (error) {
            if ('status' in error && error.status === ERROR_STATUS.FORBIDDEN) {
                localStorage.clear();
                navigate(PATHS.AUTH);
            } else {
                dispatch(setIsModalError500Open({ isOpen: true }));
            }
        }
    }, [error]);

    if (
        (!localStorage.getItem('accessToken') || !sessionStorage.getItem('accessToken')) &&
        prevPath &&
        prevPath[prevPath.length - 1].location?.pathname !== PATHS.MAIN
    ) {
        sessionStorage.clear();
        return <Navigate to={PATHS.AUTH} />;
    }

    return (
        <>
            {(isLoading || isFetching) && <Loader />}
            <LayoutComponent>
                <div className={styles.feedback_wrapper}>
                    {data && data.length === 0 ? (
                        <NoReviewsComponent />
                    ) : (
                        <>
                            <div className={`${styles.reviews_wrapper} ${styles[reviewsStyle]}`}>
                                {data && data.length < 4
                                    ? sortedReviews.map((review) => {
                                          return (
                                              <ReviewComponent
                                                  key={review.id}
                                                  createdAt={review.createdAt}
                                                  fullName={review.fullName}
                                                  avatar={review.imageSrc}
                                                  content={review.message}
                                                  rating={review.rating}
                                              />
                                          );
                                      })
                                    : portionReviewsForShow.map((review) => {
                                          return (
                                              <ReviewComponent
                                                  key={review.id}
                                                  createdAt={review.createdAt}
                                                  fullName={review.fullName}
                                                  avatar={review.imageSrc}
                                                  content={review.message}
                                                  rating={review.rating}
                                              />
                                          );
                                      })}
                            </div>
                            <div
                                className={`${styles.buttons_with_four_reviews} ${styles[buttonsStyle]}`}
                            >
                                <Button
                                    onClick={onModalOpen}
                                    data-test-id='write-review'
                                    type={'primary'}
                                >
                                    Написать отзыв
                                </Button>
                                <Button
                                    onClick={showAllReviews}
                                    data-test-id='all-reviews-button'
                                    type={'text'}
                                >
                                    {btnTitle}
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </LayoutComponent>
            <ModalComponent style={newReviewStyle} isModalOpen={isModalNewReviewOpen}>
                <NewReview />
            </ModalComponent>
            <ModalComponent style={'get_feedback_error'} isModalOpen={isModalError500Open}>
                <Error500 />
            </ModalComponent>
        </>
    );
};
