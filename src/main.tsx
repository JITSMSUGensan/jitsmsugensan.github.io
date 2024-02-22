import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';
import ThemeProvider from './app/ThemeProvider.tsx';


render(
    <ThemeProvider initialTheme="dark">
        <App />
    </ThemeProvider>,
    document.getElementById('app')!
);
