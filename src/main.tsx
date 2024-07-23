import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageComponent } from './components/main-page-component/main-page-component';
import tonValues from './consts/ton-values';

const manifestUrlValue = tonValues.manifestUrl;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>     
            <App />
    </React.StrictMode>,
);
