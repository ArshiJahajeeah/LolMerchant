import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './Components/Home/Home';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </React.StrictMode>
);
