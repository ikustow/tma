import { createBoard } from '@wixc3/react-board';
import { MainPageComponent } from '../../components/main-page-component/main-page-component';

export default createBoard({
    name: 'MainMenu',
    Board: () => <MainPageComponent/>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    },
});
