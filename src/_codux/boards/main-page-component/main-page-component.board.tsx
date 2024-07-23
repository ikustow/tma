import { createBoard } from '@wixc3/react-board';
import { MainPageComponent } from '../../../components/main-page-component/main-page-component';

export default createBoard({
    name: 'MainPageComponent',
    Board: () => <MainPageComponent />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 340,
    },
});
