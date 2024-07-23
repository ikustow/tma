import { createBoard } from '@wixc3/react-board';
import { TonAddressComponent } from '../../../components/ton-address-component/ton-address-component';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default createBoard({
    name: 'TonAddressComponent',
    Board: () => 
    
    <TonAddressComponent />,
  
    isSnippet: true,
});
