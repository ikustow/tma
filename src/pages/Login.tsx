import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';
import { TonAddressComponent } from '../components/ton-address-component/ton-address-component';
import { TonWallet } from '../components/ton-wallet/ton-wallet';
import styles from '../App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';

function Login() {
    return (
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
    );
}


export default Login;