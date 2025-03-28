import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const prepareElement = (id: string) => {
    const existingElement = document.getElementById(id);
    if (existingElement) {
        return existingElement;
    }
    const newElement = document.createElement('div');
    newElement.id = id;
    document.body.appendChild(newElement);
    return newElement;
};

createRoot(prepareElement('fauna-ai')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
