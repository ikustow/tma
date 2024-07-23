import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import tonValues from '../../../consts/ton-values';
import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';

const manifestUrlValue = tonValues.manifestUrl;
export default createBoard({
    name: 'App',
    Board: () => (
        <TonConnectUIProvider manifestUrl={manifestUrlValue}>
            <App />
        </TonConnectUIProvider>
    ),
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        windowBackgroundColor: '#ffffff',
    },
});
