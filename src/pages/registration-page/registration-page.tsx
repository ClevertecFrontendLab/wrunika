import { EnterComponent } from '@components/enter-component';
import { Registration } from '@components/registration';
import { useResize } from '@hooks/useResize.ts';
import { screenSizes } from '@constants/sizes.ts';

export const RegistrationPage = () => {
    const screenWidth = useResize();
    const marginTop =
        screenWidth > screenSizes.tabletWidth
            ? 53.5
            : screenWidth > screenSizes.mobileWidth
            ? 113.5
            : 0;
    const marginBottom =
        screenWidth > screenSizes.tabletWidth
            ? 55.5
            : screenWidth > screenSizes.mobileWidth
            ? 165.5
            : 8;
    return (
        <EnterComponent
            marginTop={marginTop}
            marginBottom={marginBottom}
            defaultActiveKey='registration'
            tabForRegistration={<Registration />}
        />
    );
};
