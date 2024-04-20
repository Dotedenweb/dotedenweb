import './style.css';
import './assets/styles/fonts.css';
import './assets/styles/own.css';
import Header from "./components/header"
import Hero from './components/hero';
import AboutUs from './components/aboutus';
import Services from './components/services';

export default function App(){
    return (
        <>
         
            <Header />
            <Hero/>
            <AboutUs/>
           <Services/>
         
        </>
    )
}