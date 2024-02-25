import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const UnsuccessfulEnter = () => {
    return (
        <ResultCard
            status='warning'
            title='Вход не выполнен'
            subTitle='Что-то пошло не так. Попробуйте еще раз'
            btnTitle='Повторить'
            btnLink={PATHS.AUTH}
            dataAttribute='login-retry-button'
            className='unsuccessful_style'
        />
    );
};
