
import logos from '../logos';

import PCMCK from '../../assets/img/mockups/PCMCK.svg';
import Phonemck from '../../assets/img/mockups/phonemck.svg'
import tablet from '../../assets/img/mockups/tablet.svg'

import pcdemo from '../../assets/img/pcdemo.png'
import demo from '../../assets/img/demo.png'
import demophone from '../../assets/img/demophone.png'

import tabletdemo from '../../assets/img/tabletdemo.png'
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

function BgElements(){
    return(
      <>
        <span className="onebg textstroke textbgsize absolute -top-24 -left-10 z-30 opacity-50 font-black">05</span>

       
      </>
    )
}

const Slideinfinite = () => {

    const imglogos = logos.map(img => 
        {
            const {logo, alt} = img;
       return <img src={logo} alt={alt}  />
        }
    )
   

    return (
       <>
        <div className="yadev-tecnologies bottom-0 left-0 z-30">
        <div className="slide-logos h-full flex flex-row items-center">
            {imglogos}
            {imglogos}
            {imglogos}
        </div>
    </div>
       </>
    )
}


const Mockups  = ()=> {

    
            const ResizeImgs = () =>{
                const thumbs = document.querySelectorAll('.mkthumb');
             


                thumbs.forEach(element => {
                        const img = element.querySelector('img'); 
                        const contentSlide = element.querySelector('.content-slide');
                        let himg = img.offsetHeight;
                        let wimg = img.offsetWidth;


                        if(contentSlide){
                        


                            const setSizeContent = {
                                phonemck : ()=>{
                                    let hp = himg * 0.09;
                                    let wp = wimg * 0.15;
                                    let wf = (wimg - wp) + 'px';
                                    let hf = (himg - hp) + 'px';
                                    contentSlide.style.width = wf;
                                    contentSlide.style.height = hf;
                                },
                                MOCKUPPC : ()=>{
                                    let hp = himg * 0.31;
                                    let wp = wimg * 0.07;
                                    let wf = ( wimg  - wp)+ 'px';
                                    let hf = (himg - hp) + 'px';
                                    contentSlide.style.width = wf;
                                    contentSlide.style.height = hf;
                                },
                                mktablet : ()=>{
                                    let hp = himg * 0.17;
                                    let wp = wimg * 0.16;
                                    let wf = (wimg - wp) + 'px';
                                    let hf = (himg - hp) + 'px';
                                    contentSlide.style.width = wf;
                                    contentSlide.style.height = hf;
                                },
                            }
                                    if(setSizeContent.hasOwnProperty(img.id)){
                                        setSizeContent[img.id]();
                                    }
                           
                         
                           
                        }

                        
                        
                });
            }

            useEffect(()=>{
                    ResizeImgs();
                    addEventListener('load', ResizeImgs);
                    addEventListener('resize', ResizeImgs);
            }, [ResizeImgs])

    return (
        <div className="flex flex-row h-screen relative z-40 items-center justify-between">
           

            <div className="basis-3/12">
               <div className="layer w-9/12 relative  h-full" data-aos="fade-up" data-aos-delay="50">
                    <div className="mkthumb w-full h-full relative overflow-hidden">
                    <img src={Phonemck} alt="phonemck"  className='w-full  h-full  relative top-0 left-0  z-10 object-contain' id="phonemck"/>

                        <div className="content-slide bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-3xl  overflow-hidden">
                        <Swiper spaceBetween={0} slidesPerView={1}  autoplay={{ delay: 3000 }}  loop={true}   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}  className='relative w-full h-full'>
                      <SwiperSlide className='relative w-full h-full'>
                      <img src={demophone}  className='w-full h-full object-contain'/>
                      </SwiperSlide>
                      <SwiperSlide className='relative w-full h-full'>
                      <img src={demophone}  className='w-full h-full object-contain'/>
                      </SwiperSlide>
                        </Swiper>
                      
                        

                        </div>
                    </div>

               </div>
               
            </div>
            <div className="basis-5/12">
               <div className="layer  h-full" data-aos="fade-up" data-aos-delay="150">
                    <div className="mkthumb w-full h-full relative overflow-hidden">
                    <img src={PCMCK} alt="MOCKUPPC"  className='max-w-full w-full  h-full  relative top-0 left-0  z-10 object-contain' id="MOCKUPPC"/>
                    <div className="content-slide bg-white absolute top-4 left-1/2 -translate-x-1/2 z-0 rounded-md  overflow-hidden">
                    <Swiper spaceBetween={0} slidesPerView={1}  autoplay={{ delay: 3000 }}  loop={true}   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}  className='relative w-full h-full'>
                      <SwiperSlide className='relative w-full h-full'>
                      <img src={pcdemo} alt="" srcset=""  className='w-full h-full object-contain object-top'/>
                      </SwiperSlide>
                      <SwiperSlide className='relative w-full h-full'>
                      <img src={demo} alt="" srcset=""  className='w-full h-full object-contain object-top'/>
                      </SwiperSlide>
                 </Swiper>
                  

                    </div>
                    </div>
               </div>
               
            </div>
            <div className="basis-3/12">
               <div className="layer  h-full">
                    <div className="mkthumb w-full h-full relative overflow-hidden" data-aos="fade-up" data-aos-delay="250">
                    <img src={tablet} alt="mktablet"  className='max-w-full w-full  h-full  relative top-0 left-0  z-10 object-contain' id="mktablet"/>
                    <div className="content-slide bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-3xl  overflow-hidden">
                    <Swiper spaceBetween={0} slidesPerView={1}  autoplay={{ delay: 3000 }}  loop={true}   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}  className='relative w-full h-full'>
                      <SwiperSlide className='relative w-full h-full'>
                      <img src={tabletdemo} alt="" srcset="" className='w-full h-full object-contain' />
                      </SwiperSlide>
                      <SwiperSlide className='relative w-full h-full'>
                      <img src={tabletdemo} alt="" srcset="" className='w-full h-full object-contain' />
                      </SwiperSlide>
                 </Swiper>
                      
                    </div>
                    </div>
               </div>
               
            </div>

        </div>
    )
}

export default function Brands(){

    
        return(
            <section className='px-2 xl:px-48 2xl:px-72 3xl:px-80 4xl:px-96 h-screen w-full max-w-screen bg-gradient-to-r from-blackdot-200 to-blackdot-100  relative'>
                <Mockups/>
                <Slideinfinite/>
                <div className="slide-yellow w-full h-[80px] absolute bottom-0 left-0 bg-yelldots-200 z-0"></div>
                 <BgElements/>
            </section>
        )
}