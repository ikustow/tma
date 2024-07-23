import classNames from 'classnames';
import styles from './ton-address-component.module.scss';
import { TonConnectUIProvider, useTonAddress } from '@tonconnect/ui-react';

export interface TonAddressComponentProps {
    className?: string;
}


export const TonAddressComponent = ({ className }: TonAddressComponentProps) => {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span>User-friendly address: {userFriendlyAddress}</span>
                <br /> 
                <span>Raw address: {rawAddress}</span>
            </div>
        </div>
    );
};
