import { Layout, Space, Typography } from 'antd';
import { ActionCard } from '@components/action-card';
import { CalendarTwoTone, HeartTwoTone, IdcardOutlined } from '@ant-design/icons';
import { useResize } from '@hooks/useResize.ts';
import { CardInfoType, WithCollapsedPropsType } from './../../types';

import s from './main-content.module.css';

const cardInfo: CardInfoType[] = [
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

export const MainContent = ({ navbarCollapsed }: WithCollapsedPropsType) => {
    const screenWidth = useResize();
    const brFor834 = screenWidth === 834 && !navbarCollapsed && <br />;
    const brFor834And1440 =
        screenWidth === 834 && navbarCollapsed ? <br /> : screenWidth === 1440 ? <br /> : null;
    return (
        <Layout.Content style={{ backgroundColor: 'transparent' }}>
            <div className={s.content_info_wrapper}>
                <div className={s.content_description}>
                    <Typography.Paragraph>С CleverFit ты сможешь:</Typography.Paragraph>
                    <Typography.Paragraph>
                        — планировать свои тренировки на календаре, выбирая тип
                        {brFor834} и уровень нагрузки;
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        — отслеживать свои достижения в разделе статистики, {brFor834}сравнивая свои
                        результаты
                        {brFor834And1440} с нормами и рекордами;
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        — создавать свой профиль, где ты можешь загружать свои фото, {brFor834}видео
                        и отзывы
                        {brFor834And1440} о тренировках;
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        — выполнять расписанные тренировки для разных частей тела, {brFor834}следуя
                        подробным {brFor834And1440}
                        инструкциям и советам профессиональных{brFor834} тренеров.
                    </Typography.Paragraph>
                </div>
                <Space
                    style={screenWidth <= 576 ? { alignItems: 'center' } : undefined}
                    direction='vertical'
                    size={16}
                >
                    <Typography.Title
                        level={4}
                        className={`${s.content_description} ${s.actions_description}`}
                    >
                        CleverFit — это не просто приложение, а твой личный помощник
                        {brFor834And1440} в мире фитнеса. Не откладывай на завтра — начни
                        тренироваться{screenWidth === 1440 && <br />} уже сегодня!
                    </Typography.Title>
                    <Space
                        style={screenWidth <= 576 ? { justifyContent: 'center' } : undefined}
                        size={screenWidth <= 576 ? 8 : 16}
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
                                        !navbarCollapsed ? 'changed_size182' : 'changed_size230'
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
