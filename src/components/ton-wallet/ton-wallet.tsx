import classNames from 'classnames';
import styles from './ton-wallet.module.scss';
import { useTonWallet } from '@tonconnect/ui-react';

export interface TonWalletProps {
    className?: string;
}

export const TonWallet = ({ className }: TonWalletProps) => {
    const wallet = useTonWallet();
    return (
        wallet &&( <div className={classNames(styles.root, className)}>
            <div>
                <span>Connected wallet: {wallet.account.address}</span>
                 <br /> 
                <span>Device: {wallet.device.appName}</span>
            </div>
        </div>)
       
    );
};
