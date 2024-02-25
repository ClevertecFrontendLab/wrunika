import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationValuesType } from './../types';

const initialState = {
    registrationData: { email: '', password: '' },
    //registrationEmail: '',
    //registrationPassword: '',
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setRegistrationData: (state, action: PayloadAction<RegistrationValuesType>) => {
            state.registrationData = action.payload;
        },
    },
});

export const { setRegistrationData } = authSlice.actions;
