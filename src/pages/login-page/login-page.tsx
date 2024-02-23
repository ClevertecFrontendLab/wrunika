import { EnterComponent } from '@components/enter-component';
import { Login } from '@components/login';

export const LoginPage = () => {
    return <EnterComponent child1={<Login />} />;
};
