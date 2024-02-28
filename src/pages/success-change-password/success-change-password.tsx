import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const SuccessChangePassword = () => {
    return (
        <ResultCard
            status='success'
            title='Пароль успешно изменен'
            subTitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
            btnTitle='Вход'
            btnLink={PATHS.AUTH}
            className='success_change_password'
            dataAttribute='change-entry-button'
        />
    );
};
