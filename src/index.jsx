import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import GlobalStyle from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<GlobalStyle />
		<ToastContainer
			autoClose={5000}
			style={{ width: '100%', maxWidth: '300px' }}
		/>
		<App />
	</>
);

reportWebVitals(sendToVercelAnalytics);
