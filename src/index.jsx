import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import './App.css';
// MUI imports
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<CartProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</CartProvider>
		</ThemeProvider>
	</React.StrictMode>
);