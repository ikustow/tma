import { createBoard } from '@wixc3/react-board';
import { LoginComponent } from '../../../components/login-component/login-component';

export default createBoard({
    name: 'LoginComponent',
    Board: () => <LoginComponent />,
    isSnippet: true,
});
