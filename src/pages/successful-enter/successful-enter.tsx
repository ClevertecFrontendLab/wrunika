import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const SuccessfulEnter = () => {
    return (
        <ResultCard
            status='success'
            title='Регистрация успешна'
            subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            btnTitle='Войти'
            btnLink={PATHS.AUTH}
            dataAttribute='registration-enter-button'
            className='successful_style'
        />
    );
};
