import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { useAppDispatch } from '@redux/configure-store.ts';
import { setIsModalError500Open } from '@redux/reducers';
import { PATHS } from '@constants/paths.ts';

import styles from './error-500.module.css';

export const Error500 = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onModalClose = () => {
        dispatch(setIsModalError500Open({ isOpen: false }));
        navigate(PATHS.MAIN);
    };
    return (
        <Result
            className={`${styles.error}`}
            status='500'
            title='Что-то пошло не так'
            subTitle='Произошла ошибка, попробуйте ещё раз.'
            extra={
                <Button onClick={onModalClose} type='primary'>
                    <span>Назад</span>
                </Button>
            }
        />
    );
};
