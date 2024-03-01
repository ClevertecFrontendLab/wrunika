import { Navigate } from 'react-router-dom';
import { MainContent } from '@components/main-content';
import { useAppSelector } from '@redux/configure-store.ts';
import { PATHS } from '@constants/paths.ts';
import { LayoutComponent } from '@components/layout-component';

export const MainPage = () => {
    const prevPath = useAppSelector((state) => state.router.previousLocations);

    if (
        !localStorage.getItem('accessToken') &&
        prevPath &&
        prevPath[prevPath.length - 1].location?.pathname !== PATHS.AUTH &&
        prevPath[prevPath.length - 1].location?.pathname !== PATHS.FEEDBACK
    ) {
        sessionStorage.clear();
        return <Navigate to={PATHS.AUTH} />;
    }
    return (
        <LayoutComponent isMainPage={true}>
            <MainContent />
        </LayoutComponent>
    );
};
