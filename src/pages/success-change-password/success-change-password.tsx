import { ResultCard } from '@components/result-card';

export const SuccessChangePassword = () => {
    return (
        <ResultCard
            status='success'
            title='Пароль успешно изменен'
            subTitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
            btnTitle='Вход'
            className='success_change_password'
            dataAttribute='change-entry-button'
        />
    );
};
