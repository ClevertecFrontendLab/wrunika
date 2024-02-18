import { ResultCard } from '@components/result-card';

export const ErrorChangePassword = () => {
    return (
        <ResultCard
            status='error'
            title='Данные не сохранились'
            subTitle='Что-то пошло не так. Попробуйте ещё раз'
            btnTitle='Повторить'
            className='error_change_password'
            dataAttribute='change-retry-button'
        />
    );
};
