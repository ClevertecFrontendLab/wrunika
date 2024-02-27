import { Layout, Space, Typography } from 'antd';
import { ActionCard } from '@components/action-card';
import { CalendarTwoTone, HeartTwoTone, IdcardOutlined } from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { CardInfoType, WithCollapsedPropsType } from './../../types';
import { screenSizes } from '@constants/sizes.ts';

import styles from './main-content.module.css';

const cardInfo: CardInfoType[] = [
    {
        title: 'Расписать тренировки',
        btnBody: 'Тренировки',
        icon: <HeartTwoTone className={styles.action_icon} />,
    },
    {
        title: 'Назначить календарь',
        btnBody: 'Календарь',
        icon: <CalendarTwoTone className={styles.action_icon} />,
    },
    {
        title: 'Заполнить профиль',
        btnBody: 'Профиль',
        icon: (
            <IdcardOutlined className={styles.action_icon_profile} style={{ color: '#2f54eb' }} />
        ),
    },
];

export const MainContent = ({ navbarCollapsed }: WithCollapsedPropsType) => {
    const screenWidth = useResize();
    return (
        <Layout.Content style={{ backgroundColor: 'transparent' }}>
            <div className={styles.content_info_wrapper}>
                <div className={styles.content_description}>
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
                <Space
                    style={
                        screenWidth <= screenSizes.mobileWidth
                            ? { alignItems: 'center' }
                            : undefined
                    }
                    direction='vertical'
                    size={16}
                >
                    <Typography.Title
                        level={4}
                        className={`${styles.content_description} ${styles.actions_description}`}
                    >
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Typography.Title>
                    <Space
                        style={
                            screenWidth <= screenSizes.mobileWidth
                                ? { justifyContent: 'center' }
                                : undefined
                        }
                        size={screenWidth <= screenSizes.mobileWidth ? 8 : 16}
                        wrap
                    >
                        {cardInfo.map((c) => {
                            return (
                                <ActionCard
                                    key={c.title}
                                    title={c.title}
                                    btnBody={c.btnBody}
                                    icon={c.icon}
                                    changedSize={
                                        !navbarCollapsed
                                            ? 'changed_width_182px'
                                            : 'changed_width_230px'
                                    }
                                />
                            );
                        })}
                    </Space>
                </Space>
            </div>
        </Layout.Content>
    );
};
