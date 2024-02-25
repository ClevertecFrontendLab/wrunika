import { Link } from 'react-router-dom';
import { EnterBg } from '@components/enter-bg';
import { Button, Result } from 'antd';
import { ResultCardPropsType } from './../../types';

import s from './result-card.module.css';

export const ResultCard = ({
    status,
    subTitle,
    btnTitle,
    btnLink = '',
    onBtnClick,
    dataAttribute,
    title,
    className,
}: ResultCardPropsType) => {
    return (
        <EnterBg>
            <Result
                className={`${s.wrapper} ${s[className]}`}
                status={status}
                title={title}
                subTitle={subTitle}
                extra={
                    <Button
                        onClick={onBtnClick}
                        data-test-id={dataAttribute}
                        type='primary'
                        key='console'
                    >
                        <Link to={btnLink}>{btnTitle}</Link>
                    </Button>
                }
            />
        </EnterBg>
    );
};
