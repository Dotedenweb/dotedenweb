import Hero from '../components/home/hero';
import AboutUs from '../components/home/aboutus';
import Services from '../components/home/services';
import Grow from '../components/home/grow';
import Team from '../components/home/team';
import Brands from '../components/home/brands';
import {BlobEffect} from '../components/blob';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';

export default function Home(){
    const idsect = 'idbrands';
    useEffect(()=>{
        AOS.init();
    }, [])
    return(
        <>
        <Hero/>
        <AboutUs/>
        <Services/>
        <Grow/>
       <div className="blobeffect overflow-hidden relative" id={idsect} onMouseMove={(e)=>{
                const elementparent = document.getElementById(idsect);
                BlobEffect(e, elementparent);
            }}>
       <Team/>
        <Brands/>
        <div className="blob z-0"></div>
                    <div className="blur z-20"></div>

       </div>
        </>
    )
}