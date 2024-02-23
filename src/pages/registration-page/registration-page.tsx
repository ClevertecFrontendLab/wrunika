import { EnterComponent } from '@components/enter-component';
import { Registration } from '@components/registration';
import { useResize } from '@hooks/useResize.ts';

export const RegistrationPage = () => {
    const screenWidth = useResize();
    const marginTop = screenWidth > 834 ? 53.5 : screenWidth > 576 ? 113.5 : 0;
    const marginBottom = screenWidth > 834 ? 55.5 : screenWidth > 576 ? 165.5 : 8;
    return (
        <EnterComponent
            marginTop={marginTop}
            marginBottom={marginBottom}
            defaultActiveKey='item-2'
            child2={<Registration />}
        />
    );
};
