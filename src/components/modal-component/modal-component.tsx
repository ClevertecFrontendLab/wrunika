import { ReactNode } from 'react';
import { Modal } from 'antd';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';

import styles from './modal-component.module.css';

type PropsType = {
    children: ReactNode;
    isModalOpen: boolean;
    style:
        | 'get_feedback_error'
        | 'add_new_review'
        | 'writing_review'
        | 'success_post_review'
        | 'error_post_review';
};

export const ModalComponent = ({ children, isModalOpen, style }: PropsType) => {
    const screenWidth = useResize();
    const cardWidth = screenWidth <= screenSizes.mobileWidth ? 328 : 539;
    return (
        <Modal
            className={`${styles.modal_wrapper} ${styles[style]}`}
            maskStyle={{
                backgroundColor: 'rgb(121,156,213, 0.5)',
                backdropFilter: 'blur(5px)',
            }}
            width={cardWidth}
            closable={false}
            footer={null}
            open={isModalOpen}
        >
            {children}
        </Modal>
    );
};
