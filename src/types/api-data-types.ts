export type LoginResponse = {
    accessToken: string;
};

export type EnterArgs = {
    email: string;
    password: string;
};

export type CheckEmailArgs = Pick<EnterArgs, 'email'>;

export type CheckEmailResponse = {
    email: string;
    message: string;
};

export type ConfirmEmailResponse = CheckEmailResponse;

export type ConfirmEmailArgs = {
    email: string;
    code: string;
};

export type ChangePasswordArgs = {
    confirmPassword: string;
    password: string;
};

export type ChangePasswordResponse = {
    message: string;
};

export type GetFeedbackResponse = {
    id: string;
    fullName: null | string;
    imageSrc: null | string;
    message: null | string;
    rating: number;
    createdAt: string;
};

export type PostReviewRequest = {
    message: string;
    rating: number;
};
