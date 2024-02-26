import { ResultCard } from '@components/result-card';
import { PATHS } from '@constants/paths.ts';

export const ErrorEmailNoExist = () => {
    return (
        <ResultCard
            status='error'
            title='Такой e-mail не зарегистрирован'
            subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
            btnTitle='Попробовать снова'
            btnLink={PATHS.AUTH}
            className='error_email_no_exist'
            dataAttribute='check-retry-button'
        />
    );
};
