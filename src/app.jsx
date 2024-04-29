

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header'
import Home from  './pages/home'
import Servicios from './pages/Servicios';
import AboutPage from './pages/about';


import './style.css';
import './assets/styles/fonts.css';
import './assets/styles/own.css';

export default function App(){

    return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/servicios" element={ <Servicios />}/>
        <Route path="/nosotros" element={ <AboutPage />}/>
      </Routes>
    </BrowserRouter>
         
    )
}