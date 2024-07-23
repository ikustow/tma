import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default createBoard({
    name: 'App',
    Board: () =>
      <TonConnectUIProvider manifestUrl="https://gist.githubusercontent.com/ikustow/cb642b537e3ea0fab51527a60a8a895a/raw/b78a6d3a27fd4ab15d902e907d293b0944280221/gistfile1.txt">
     <App />
     </TonConnectUIProvider>
     ,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    },
});
