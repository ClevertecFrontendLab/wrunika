import { ResultCard } from '@components/result-card';

export const SuccessfulEnter = () => {
    return (
        <ResultCard
            status='success'
            title='Регистрация успешна'
            subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            btnTitle='Войти'
            dataAttribute='registration-enter-button'
            className='successful_style'
        />
    );
};
