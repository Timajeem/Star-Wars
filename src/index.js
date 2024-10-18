import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './containers/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1 className='header'>Hello index</h1>
  </React.StrictMode>
);


