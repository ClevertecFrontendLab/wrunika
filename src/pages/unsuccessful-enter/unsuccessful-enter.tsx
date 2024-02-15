import { ResultCard } from '@components/result-card';

export const UnsuccessfulEnter = () => {
    return (
        <ResultCard
            status='warning'
            title='Вход не выполнен'
            subTitle='Что-то пошло не так. Попробуйте еще раз'
            btnTitle='Повторить'
            dataAttribute='login-retry-button'
            className='unsuccessful_style'
        />
    );
};
