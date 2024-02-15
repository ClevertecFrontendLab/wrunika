import { ResultCard } from '@components/result-card';

export const ErrorUserExist = () => {
    return (
        <ResultCard
            status='error'
            title='Данные не сохранились'
            subTitle='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            btnTitle='Назад к регистрации'
            dataAttribute='registration-back-button'
            className={'error_style'}
        />
    );
};
