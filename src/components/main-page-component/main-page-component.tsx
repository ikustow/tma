import classNames from 'classnames';
import styles from './main-page-component.module.scss';
import { TonWallet } from '../ton-wallet/ton-wallet';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

export interface MainPageComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MainPageComponent = ({ className }: MainPageComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
             <TonConnectUIProvider manifestUrl="https://gist.githubusercontent.com/ikustow/cb642b537e3ea0fab51527a60a8a895a/raw/b78a6d3a27fd4ab15d902e907d293b0944280221/gistfile1.txt">
              <TonConnectButton />
             </TonConnectUIProvider >
            MainPageComponent
        </div>
    );
};
