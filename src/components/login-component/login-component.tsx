import classNames from 'classnames';
import styles from './login-component.module.scss';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import React, { useEffect } from 'react';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import { TonAddressComponent } from '../ton-address-component/ton-address-component';
import { TonWallet } from '../ton-wallet/ton-wallet';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';
import tonValues from '../../consts/ton-values';

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
                </main>
            </div>
        </div>        
    );
};
