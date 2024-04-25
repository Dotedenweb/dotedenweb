import './style.css';
import './assets/styles/fonts.css';
import './assets/styles/own.css';
import Header from './components/header'
import Home from  './pages/home'
import { BrowserRouter } from 'react-router-dom';



export default function App(){
    return (
    <BrowserRouter>
     <Header />
      <Home />
    </BrowserRouter>
         
    )
}