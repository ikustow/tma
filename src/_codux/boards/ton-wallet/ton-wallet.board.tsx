import { createBoard } from '@wixc3/react-board';
import { TonWallet } from '../../../components/ton-wallet/ton-wallet';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default createBoard({
    name: 'TonWallet',
    Board: () => <TonWallet />,

    isSnippet: true,
});
