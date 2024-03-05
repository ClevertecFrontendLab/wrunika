import { Rate } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import { useAppDispatch } from '@redux/configure-store.ts';
import { setRatingValue } from '@redux/reducers';

import styles from './rating.module.css';

type PropsType = {
    rating: number;
    starSize?: number;
    disabled?: boolean;
};
export const Rating = ({ rating, starSize = 16, disabled = true }: PropsType) => {
    const dispatch = useAppDispatch();
    const changeRating = (value: number) => {
        dispatch(setRatingValue({ ratingValue: value }));
    };

    return (
        <Rate
            className={styles.rating_list}
            disabled={disabled}
            value={rating}
            onChange={changeRating}
            style={{ fontSize: `${starSize}px` }}
            character={({ value: currentValue, index }) => {
                return currentValue && index !== undefined && index < currentValue ? (
                    <StarTwoTone twoToneColor={['#faad14', '#faad14']} />
                ) : (
                    <StarTwoTone twoToneColor={['#faad14', '#fff']} />
                );
            }}
        />
    );
};
