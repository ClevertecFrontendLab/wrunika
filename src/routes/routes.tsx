import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '@constants/paths.ts';
import { MainPage } from '@pages/main-page';
import { UnsuccessfulEnter } from '@pages/unsuccessful-enter';
import { RegistrationPage } from '@pages/registration-page';
import { SuccessfulEnter } from '@pages/successful-enter';
import { ErrorUserExist } from '@pages/error-user-exist';
import { ErrorRegistration } from '@pages/error-registration';
import { ErrorEmailNoExist } from '@pages/error-email-no-exist';
import { ErrorCheckEmail } from '@pages/error-check-email';
import { ErrorChangePassword } from '@pages/error-change-password';
import { SuccessChangePassword } from '@pages/success-change-password';
import { ConfirmEmail } from '@pages/confirm-email';
import { AuthChangePassword } from '@pages/auth-change-password';
import { LoginPage } from '@pages/login-page';

export const routes = (
    <Routes>
        <Route path={PATHS.MAIN} element={<MainPage />} />
        <Route path={PATHS.ROOT} element={<Navigate to={PATHS.MAIN} />} />
        <Route path={PATHS.AUTH} element={<LoginPage />} />
        <Route path={PATHS.REGISTRATION} element={<RegistrationPage />} />

        <Route path={PATHS.ERROR_LOGIN} element={<UnsuccessfulEnter />} />
        <Route path={PATHS.REGISTRATION_SUCCESS} element={<SuccessfulEnter />} />
        <Route path={PATHS.ERROR_USER_EXIST} element={<ErrorUserExist />} />
        <Route path={PATHS.ERROR} element={<ErrorRegistration />} />
        <Route path={PATHS.EMAIL_NO_EXIST} element={<ErrorEmailNoExist />} />
        <Route path={PATHS.ERROR_CHECK_EMAIL} element={<ErrorCheckEmail />} />
        <Route path={PATHS.ERROR_CHANGE_PASSWORD} element={<ErrorChangePassword />} />
        <Route path={PATHS.SUCCESS_CHANGE_PASSWORD} element={<SuccessChangePassword />} />
        <Route path={PATHS.CONFIRM_EMAIL} element={<ConfirmEmail />} />
        <Route path={PATHS.CHANGE_PASSWORD} element={<AuthChangePassword />} />
    </Routes>
);
