import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordType, RegistrationValuesType } from './../../types';

const initialState = {
    registrationData: { email: '', password: '' },
    emailForForgot: { email: '' },
    changePasswordData: { confirmPassword: '', password: '' },
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setRegistrationData: (state, action: PayloadAction<RegistrationValuesType>) => {
            state.registrationData = action.payload;
        },
        setEmailForForgot: (state, action: PayloadAction<{ email: string }>) => {
            state.emailForForgot = action.payload;
        },
        setChangePasswordData: (state, action: PayloadAction<ChangePasswordType>) => {
            state.changePasswordData = action.payload;
        },
    },
});

export const { setRegistrationData, setEmailForForgot, setChangePasswordData } = authSlice.actions;
