import classNames from 'classnames';
import styles from './main-page-component.module.scss';
import { TonWallet } from '../ton-wallet/ton-wallet';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import tonValues from '../../consts/ton-values';

export interface MainPageComponentProps {
    className?: string;
}

export const MainPageComponent = ({ className }: MainPageComponentProps) => {
    const [tonConnectUI] = useTonConnectUI();
    const manifestUrlValue = tonValues.manifestUrl;
    useEffect(
        () =>
            tonConnectUI.onStatusChange((wallet) => {
                if (wallet == null) {
                 
                }
            }),
        [],
    );
    return (
        <div className={classNames(styles.root, className)}>
                 <TonConnectButton />
            MainPageComponent
        </div>
    );
};
