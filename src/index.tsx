import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {ThemeProvider} from "./providers/ThemeProvider";
import {LangProvider} from "./providers/LangProvider";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <LangProvider/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);
