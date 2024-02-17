import { ResultCard } from '@components/result-card';

export const ErrorRegistration = () => {
    return (
        <ResultCard
            status='error'
            title='Данные не сохранились'
            subTitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            btnTitle='Повторить'
            dataAttribute='registration-retry-button'
            className='error_registration'
        />
    );
};
