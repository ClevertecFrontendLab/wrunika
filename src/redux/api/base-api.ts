import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Review'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru',
        prepareHeaders(headers) {
            const token =
                localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
