import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbProps } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { navigation } from '~/constants/navigation';

const Breadcrumbs = (props: BreadcrumbProps) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const findLabel = (path: string, index: number, allPaths: string[]) => {
        const fullPath = allPaths.slice(0, index + 1).join('/');
        const mainCategory = navigation.find((category) => category.link === fullPath);

        if (fullPath === 'juiciest') return 'Самое сочное';

        if (mainCategory) return mainCategory.title;

        for (const category of navigation) {
            if (category.tabs) {
                const tab = category.tabs.find((subCategory) => subCategory.link === fullPath);
                if (tab) return tab.title;
            }
        }

        return path;
    };

    return (
        <Breadcrumb separator={<ChevronRightIcon />} {...props}>
            <BreadcrumbItem isCurrentPage={pathnames.length === 0}>
                <BreadcrumbLink as={Link} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((path, i) => {
                const routeTo = `/${pathnames.slice(0, i + 1).join('/')}`;
                const label = findLabel(path, i, pathnames);

                return (
                    <BreadcrumbItem key={routeTo} isCurrentPage={i === pathnames.length - 1}>
                        <BreadcrumbLink as={Link} to={routeTo}>
                            {label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
