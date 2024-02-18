import { ResultCard } from '@components/result-card';

export const ErrorCheckEmail = () => {
    return (
        <ResultCard
            status='500'
            title='Что-то пошло не так'
            subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
            btnTitle='Назад'
            className='error_check_email'
            dataAttribute='check-back-button'
        />
    );
};
