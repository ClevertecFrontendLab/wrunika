import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ResultStatusType } from 'antd/es/result';
import { EnterBg } from '@components/enter-bg';
import { Button, Result } from 'antd';
import { useAppSelector } from '@redux/configure-store.ts';
import { PATHS } from '@constants/paths.ts';
import { Loader } from '@components/loader';

import styles from './result-card.module.css';

type PropsType = {
    status: ResultStatusType;
    title: string;
    subTitle: string;
    btnTitle: string;
    btnLink?: string;
    dataAttribute?: string;
    className:
        | 'error_style'
        | 'unsuccessful_style'
        | 'successful_style'
        | 'error_registration'
        | 'error_email_no_exist'
        | 'error_change_password'
        | 'success_change_password'
        | 'error_check_email'
        | 'confirm_email'
        | 'error_confirm_email';
};

export const ResultCard = ({
    status,
    subTitle,
    btnTitle,
    btnLink = '',
    dataAttribute,
    title,
    className,
}: PropsType) => {
    const prevPath = useAppSelector((state) => state.router.previousLocations);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (prevPath && prevPath.length <= 1) {
            setShouldRedirect(true);
        } else {
            setShouldRender(true);
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
                        className={`${styles.wrapper} ${styles[className]}`}
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
