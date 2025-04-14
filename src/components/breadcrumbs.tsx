import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { Paths } from '~/constants';

enum BreadcrumbItems {
    JUICIEST = 'Самое сочное',
    VEGAN_CUISINE = 'Веганская кухня',
    SECONDS = 'Вторые блюда',
}

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path) => path);

    return (
        <Breadcrumb separator='>'>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    color={location.pathname === '/' ? 'black' : 'blackAlpha.700'}
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathNames.map((value, index) => {
                const to = `/${pathNames.slice(0, index + 1).join('/')}`;
                const isActive = location.pathname === to;

                return (
                    <BreadcrumbItem key={to}>
                        <BreadcrumbLink
                            as={Link}
                            to={to}
                            color={isActive ? 'black' : 'blackAlpha.700'}
                        >
                            {value === Paths.JUICIEST
                                ? BreadcrumbItems.JUICIEST
                                : value === Paths.VEGAN_CUISINE
                                  ? BreadcrumbItems.VEGAN_CUISINE
                                  : value === Paths.SECONDS
                                    ? BreadcrumbItems.SECONDS
                                    : value}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
