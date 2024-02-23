import Lottie from 'react-lottie';
import animationData from './loader.json';
import { useResize } from '@hooks/useResize.ts';

import s from './loader.module.css';

export const Loader = () => {
    const screenWidth = useResize();
    const left = (screenWidth - 150) / 2;
    const top = screenWidth >= 1440 ? 405 : screenWidth >= 834 ? 522 : 325;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={s.loader_wrapper}>
            <div style={{ marginTop: top, marginLeft: left }}>
                <Lottie options={defaultOptions} height={150} width={150} />
            </div>
        </div>
    );
};
