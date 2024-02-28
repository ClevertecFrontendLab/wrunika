import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const ErrorCheckEmail = () => {
    return (
        <ResultCard
            status='500'
            title='Что-то пошло не так'
            subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
            btnTitle='Назад'
            btnLink={PATHS.AUTH}
            className='error_check_email'
            dataAttribute='check-back-button'
        />
    );
};
