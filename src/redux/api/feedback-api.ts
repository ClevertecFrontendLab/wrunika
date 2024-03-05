import { baseApi } from '@redux/api/base-api.ts';
import { GetFeedbackResponse, PostReviewRequest } from './../../types';

const feedbackApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            getFeedback: builder.query<GetFeedbackResponse[], void>({
                query: () => {
                    return { url: `/feedback`, method: 'GET' };
                },
                providesTags: ['Review'],
            }),
            postReview: builder.mutation<void, PostReviewRequest>({
                query: (args) => {
                    return { url: `/feedback`, method: 'POST', body: args };
                },
                invalidatesTags: ['Review'],
            }),
        };
    },
});

export const { useGetFeedbackQuery, usePostReviewMutation } = feedbackApi;
