import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const ErrorUserExist = () => {
    return (
        <ResultCard
            status='error'
            title='Данные не сохранились'
            subTitle='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            btnTitle='Назад к регистрации'
            btnLink={PATHS.REGISTRATION}
            dataAttribute='registration-back-button'
            className={'error_style'}
        />
    );
};
