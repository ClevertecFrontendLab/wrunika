import {
    ChangePasswordArgs,
    ChangePasswordResponse,
    CheckEmailArgs,
    CheckEmailResponse,
    ConfirmEmailArgs,
    ConfirmEmailResponse,
    EnterArgs,
    LoginResponse,
} from './../types';
import { baseApi } from '@redux/base-api.ts';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            login: builder.mutation<LoginResponse, EnterArgs>({
                query: (args) => {
                    return { url: `/auth/login`, method: 'POST', body: args };
                },
            }),
            registration: builder.mutation<void, EnterArgs>({
                query: (args) => {
                    return { url: `/auth/registration`, method: 'POST', body: args };
                },
            }),
            checkEmail: builder.mutation<CheckEmailResponse, CheckEmailArgs>({
                query: (args) => {
                    return { url: `/auth/check-email`, method: 'POST', body: args };
                },
            }),
            confirmEmail: builder.mutation<ConfirmEmailResponse, ConfirmEmailArgs>({
                query: (args) => {
                    return {
                        url: `/auth/confirm-email`,
                        method: 'POST',
                        body: args,
                        credentials: 'include',
                    };
                },
            }),
            changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordArgs>({
                query: (args) => {
                    return {
                        url: `/auth/change-password`,
                        method: 'POST',
                        body: args,
                        credentials: 'include',
                    };
                },
            }),
        };
    },
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
    useChangePasswordMutation,
} = authApi;
