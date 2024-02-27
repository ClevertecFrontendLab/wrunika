import Lottie from 'react-lottie';
import animationData from './loader.json';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';

import styles from './loader.module.css';

export const Loader = () => {
    const screenWidth = useResize();
    const loaderWidth = 150;
    const left = (screenWidth - loaderWidth) / 2;
    const top =
        screenWidth >= screenSizes.desktopWidth
            ? 405
            : screenWidth >= screenSizes.tabletWidth
            ? 522
            : 325;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div data-test-id='loader' className={styles.loader_wrapper}>
            <div style={{ marginTop: top, marginLeft: left }}>
                <Lottie options={defaultOptions} height={loaderWidth} width={loaderWidth} />
            </div>
        </div>
    );
};
