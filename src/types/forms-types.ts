export type LoginValuesType = {
    email: string;
    password: string;
    remember: boolean;
};

export type RegistrationValuesType = Omit<LoginValuesType, 'remember'>;

export type ChangePasswordType = {
    password: string;
    confirmPassword: string;
};
