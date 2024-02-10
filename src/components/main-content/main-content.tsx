import { Layout, Space, Typography } from 'antd';
import { ActionCard } from '@components/action-card';
import { CalendarTwoTone, HeartTwoTone, IdcardOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

import s from './main-content.module.css';

type CardType = {
    title: string;
    btnBody: string;
    icon: ReactNode;
};
const cardInfo: CardType[] = [
    {
        title: 'Расписать тренировки',
        btnBody: 'Тренировки',
        icon: <HeartTwoTone className={s.action_icon} />,
    },
    {
        title: 'Назначить календарь',
        btnBody: 'Календарь',
        icon: <CalendarTwoTone className={s.action_icon} />,
    },
    {
        title: 'Заполнить профиль',
        btnBody: 'Профиль',
        icon: <IdcardOutlined className={s.action_icon_profile} style={{ color: '#2f54eb' }} />,
    },
];

export const MainContent = () => {
    return (
        <Layout.Content style={{ backgroundColor: 'transparent' }}>
            <div className={s.content_info_wrapper}>
                <div className={s.content_description}>
                    <Typography.Paragraph>С CleverFit ты сможешь:</Typography.Paragraph>
                    <Typography.Paragraph>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о тренировках;
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
                    </Typography.Paragraph>
                </div>
                <Space direction='vertical' size={16}>
                    <Typography.Title
                        level={4}
                        className={`${s.content_description} ${s.actions_description}`}
                    >
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Typography.Title>
                    <Space size={16} wrap>
                        {cardInfo.map((c) => {
                            return (
                                <ActionCard
                                    key={c.title}
                                    title={c.title}
                                    btnBody={c.btnBody}
                                    icon={c.icon}
                                />
                            );
                        })}
                    </Space>
                </Space>
            </div>
        </Layout.Content>
    );
};
