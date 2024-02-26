import { Link, Navigate } from 'react-router-dom';
import { EnterBg } from '@components/enter-bg';
import { Button, Result } from 'antd';
import { ResultCardPropsType } from './../../types';
import { useAppSelector } from '@redux/configure-store.ts';
import { PATHS } from '@constants/paths.ts';
import { Loader } from '@components/loader';
import { useEffect, useState } from 'react';

import s from './result-card.module.css';

export const ResultCard = ({
    status,
    subTitle,
    btnTitle,
    btnLink = '',
    dataAttribute,
    title,
    className,
}: ResultCardPropsType) => {
    const prevPath = useAppSelector((state) => state.router.previousLocations);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (prevPath && prevPath.length <= 1) {
            setShouldRedirect(true);
        } else {
            const timeoutId = setTimeout(() => {
                setShouldRender(true);
            }, 0);

            return () => clearTimeout(timeoutId);
        }
    }, [prevPath]);

    if (shouldRedirect) {
        return <Navigate to={PATHS.AUTH} />;
    }

    return (
        <>
            {!shouldRender ? (
                <Loader />
            ) : (
                <EnterBg>
                    <Result
                        className={`${s.wrapper} ${s[className]}`}
                        status={status}
                        title={title}
                        subTitle={subTitle}
                        extra={
                            <Button data-test-id={dataAttribute} type='primary' key='console'>
                                <Link to={btnLink}>{btnTitle}</Link>
                            </Button>
                        }
                    />
                </EnterBg>
            )}
        </>
    );
};
