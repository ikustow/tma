import styles from './App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { MainPageComponent } from './components/main-page-component/main-page-component';
import MainPage from './pages/MainPage';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { LoginComponent } from './components/login-component/login-component';

const LoginPageWithButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/main');
    };

    return (
        <div>
            <TonConnectUIProvider manifestUrl="https://gist.githubusercontent.com/ikustow/cb642b537e3ea0fab51527a60a8a895a/raw/b78a6d3a27fd4ab15d902e907d293b0944280221/gistfile1.txt">
                <LoginComponent />
            </TonConnectUIProvider>
            <button onClick={handleButtonClick}>Go to Main Page</button>
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<LoginPageWithButton />} />
                <Route path="main" element={<MainPageComponent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
