import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { PATHS } from '@constants/paths.ts';

import styles from './breadcrumbs.module.css';

type BreadcrumbItemType = {
    path?: string;
    name: string;
};
type BreadCrumbRoutesType = {
    main: BreadcrumbItemType[];
    feedbacks: BreadcrumbItemType[];
};

const routesForBreadcrumbs: BreadCrumbRoutesType = {
    main: [
        {
            name: 'Главная',
        },
    ],
    feedbacks: [
        {
            name: 'Главная',
            path: PATHS.MAIN,
        },
        {
            name: 'Отзывы пользователей',
        },
    ],
};

export const Breadcrumbs = () => {
    const location = useLocation();
    const [currentRoutes, setCurrentRoutes] = useState<BreadcrumbItemType[]>();

    useEffect(() => {
        if (location.pathname === PATHS.MAIN) {
            setCurrentRoutes(routesForBreadcrumbs.main);
        }
        if (location.pathname === PATHS.FEEDBACK) {
            setCurrentRoutes(routesForBreadcrumbs.feedbacks);
        }
    }, [location.pathname]);

    return (
        <Breadcrumb className={styles.breadcrumb}>
            {currentRoutes &&
                currentRoutes.map((route: BreadcrumbItemType, index: number) => (
                    <Breadcrumb.Item key={index}>
                        {route.path ? <Link to={route.path}>{route.name}</Link> : route.name}
                    </Breadcrumb.Item>
                ))}
        </Breadcrumb>
    );
};
