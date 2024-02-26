import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const ErrorChangePassword = () => {
    return (
        <ResultCard
            status='error'
            title='Данные не сохранились'
            subTitle='Что-то пошло не так. Попробуйте ещё раз'
            btnTitle='Повторить'
            btnLink={PATHS.CHANGE_PASSWORD}
            className='error_change_password'
            dataAttribute='change-retry-button'
        />
    );
};
