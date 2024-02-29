import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isNavbarCollapsed: false,
};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        setIsNavbarCollapsed: (state, action: PayloadAction<{ isNavbarCollapsed: boolean }>) => {
            state.isNavbarCollapsed = action.payload.isNavbarCollapsed;
        },
    },
});

export const { setIsNavbarCollapsed } = layoutSlice.actions;
