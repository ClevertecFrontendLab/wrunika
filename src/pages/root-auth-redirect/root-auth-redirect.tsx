import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/paths.ts';

export const RootAuthRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const accessToken = searchParams.get('accessToken');

        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            navigate(PATHS.MAIN);
        }

        navigate(PATHS.AUTH);
    }, [location.search, navigate]);

    return <Navigate to={PATHS.MAIN} />;
};
