import { ReactNode } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
import { Rating } from '@components/rating';

import styles from './review-component.module.css';

type PropsType = {
    key: string;
    content: ReactNode;
    fullName: string | null;
    avatar: string | null;
    createdAt: string;
    rating: number;
};
export const ReviewComponent = ({
    content,
    fullName,
    avatar,
    createdAt,
    rating = 0,
}: PropsType) => {
    const formattedDate = new Date(createdAt).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return (
        <div className={styles.comment_wrapper}>
            <div className={styles.about_user}>
                <Avatar
                    className={styles.avatar_for_comment}
                    size={42}
                    src={avatar}
                    icon={!avatar && <UserOutlined />}
                    alt='avatar'
                />
                <Typography.Text className={styles.user_name}>
                    {fullName || 'Пользователь'}
                </Typography.Text>
            </div>
            <div className={styles.comment_body}>
                <div className={styles.rating_date}>
                    <Rating rating={rating} />
                    <Typography.Text>{formattedDate}</Typography.Text>
                </div>
                <Typography.Paragraph className={styles.comment_content}>
                    {content}
                </Typography.Paragraph>
            </div>
        </div>
    );
};
