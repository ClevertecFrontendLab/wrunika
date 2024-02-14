import { EnterBg } from '@components/enter-bg';
import { Button, Result } from 'antd';
import { ResultCardPropsType } from './../../types';

import s from './result-card.module.css';

export const ResultCard = ({
    status,
    subTitle,
    btnTitle,
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
                    <Button data-test-id={dataAttribute} type='primary' key='console'>
                        {btnTitle}
                    </Button>
                }
            />
        </EnterBg>
    );
};
