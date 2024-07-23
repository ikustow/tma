import classNames from 'classnames';
import { TonConnectButton, TonConnectUIProvider, useTonWallet } from '@tonconnect/ui-react';
import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';
import tonValues from './consts/ton-values';
import { TonWallet } from './components/ton-wallet/ton-wallet';
const manifestUrlValue = tonValues.manifestUrl;

const MainBoard = () => {
    return (
        <div>
            <TonConnectUIProvider manifestUrl={manifestUrlValue}>
                <TonConnectButton />
                <h5>Promiser</h5>
                  <TonWallet />
            </TonConnectUIProvider>
        </div>
    );
};

const AlternativeComponent = () => {
    return (
        <div>
            <TonConnectUIProvider manifestUrl={manifestUrlValue}>
                <TonConnectButton />
                <h5>Promiser2 </h5>
            </TonConnectUIProvider>
        </div>
    );
};

function App() {
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    const [showMainBoard, setShowMainBoard] = useState(false);

    useEffect(
        () =>
            tonConnectUI.onStatusChange((wallet) => {
                if (wallet == null) {
                    setShowMainBoard(false);
                } else {
                    setShowMainBoard(true);
                }
            }),
        [],
    );

    return (
        <div className={styles.mainDiv}>
          
            <header className={styles.header}></header>
            <main className={styles.mainContent}>
                <section className={styles.section}>
                    {showMainBoard ? <MainBoard /> : <AlternativeComponent />}
                </section>
            </main>
        </div>
    );
}

export default App;
