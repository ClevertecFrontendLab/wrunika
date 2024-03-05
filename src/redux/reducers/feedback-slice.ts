import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    ratingValue: 0,
    reviewValue: '',
    isModalError500Open: false,
    isModalNewReviewOpen: false,
    isModalSuccessPostReviewOpen: false,
    isModalErrorPostReviewOpen: false,
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: initialState,
    reducers: {
        setIsModalError500Open: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.isModalError500Open = action.payload.isOpen;
        },
        setIsModalNewReviewOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.isModalNewReviewOpen = action.payload.isOpen;
        },
        setIsModalSuccessPostReviewOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.isModalSuccessPostReviewOpen = action.payload.isOpen;
        },
        setIsModalErrorPostReviewOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.isModalErrorPostReviewOpen = action.payload.isOpen;
        },
        setRatingValue: (state, action: PayloadAction<{ ratingValue: number }>) => {
            state.ratingValue = action.payload.ratingValue;
        },
        setReviewValue: (state, action: PayloadAction<{ reviewValue: string }>) => {
            state.reviewValue = action.payload.reviewValue;
        },
    },
});

export const {
    setIsModalError500Open,
    setIsModalNewReviewOpen,
    setRatingValue,
    setReviewValue,
    setIsModalSuccessPostReviewOpen,
    setIsModalErrorPostReviewOpen,
} = feedbackSlice.actions;
