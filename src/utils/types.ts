export type Item = {
    id: number;
    title: string;
    icon: string;
};

export type NavItem = Item & {
    options: string[];
};

export type BadgeInfo = {
    badgeIcon: string;
    badgeTitle: string;
    badgeNotifications?: { icon: string; count: number }[];
};

export type Recommendation = {
    avatar: string;
    name: string;
};

export type CardItem = {
    id: number;
    title: string;
    dishImage: string;
    description: string;
    badgeInfo: BadgeInfo;
    recommendation?: Recommendation;
};

export type User = {
    name: string;
    nickname: string;
    avatar: string;
};

export type Author = {
    id: number;
    info: string;
    user: User;
};
