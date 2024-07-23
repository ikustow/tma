import classNames from 'classnames';
import styles from './login-component.module.scss';
import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import { TonAddressComponent } from '../ton-address-component/ton-address-component';
import { TonWallet } from '../ton-wallet/ton-wallet';

export interface LoginComponentProps {
    className?: string;
}

export const LoginComponent = ({ className }: LoginComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.mainDiv}>
                <header className={styles.header}>
                    <h5>Promiser</h5>
                </header>
                <main className={styles.mainContent}>
                    <section className={styles.section}>
                        <TonConnectButton />
                    </section>
                    <section className={styles.section}>
                        <TonAddressComponent />
                    </section>
                    <section className={styles.section}>
                        <TonWallet />
                    </section>
                </main>
            </div>
        </div>
    );
};
