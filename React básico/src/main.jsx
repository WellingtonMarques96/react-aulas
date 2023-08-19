import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// caso o react bootstrap esteja sendo usado, não precisa importar esse documento import "bootstrap/dist/js/bootstrap.bundle.min.js";
// só precisa desse no caso do react import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
