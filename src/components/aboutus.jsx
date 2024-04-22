import linescute from '../assets/img/linecute.svg'; 
import foto01 from '../assets/img/150x15foto.svg';
import foto02 from '../assets/img/foto02.svg';

import CircleButton from './circlebutton';
function BgElements(){
    return(
      <>
        <span className="onebg textstroke textbgsize absolute -top-24 -left-10 z-20 opacity-50 font-black">01</span>

        <img src={linescute} alt="linescute"  className='absolute w-full h-full top-0 left-0 right-0 bottom-0 z-0 object-fill opacity-50'/>
      </>
    )
}

function CirclePerfil(){
        return (
            <>
            <div className="absolute top-24 left-2/4 layer w-[210px] h-[210px] border border-white rounded-full z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 thumb overflow-hidden w-[200px] h-[200px] max-w-[200px] max-h-[200px] bg-gradient-to-tr from-apblue-400 to-apblue-100 rounded-full">
                            <img src={foto01} alt="foto01"  className='absolute top-0 left-0 object-cover w-full h-auto'/>
                    </div>
            </div>
            <div className="absolute top-56 left-14 layer w-[190px] h-[190px] border border-white rounded-full z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 thumb overflow-hidden w-[180px] h-[180px] max-w-[180px] max-h-[180px] bg-gradient-to-tr from-apblue-400 to-apblue-100 rounded-full">
                            <img src={foto02} alt="foto02"  className='absolute top-0 left-0 object-cover w-full h-auto'/>
                    </div>
            </div>
            </>
        )
}

function RightText(){
    return(
       
       <div className="wrapper">
        <div className="title mt-6 mb-4 relative">
        <h2 className='text-8xl text-white font-black relative z-10'>Sobre Nosotros</h2>
        <p className="clonetext textstroke text-8xl font-black -top-5 -left-7 absolute opacity-45 z-0">Sobre Nosotros</p>
     
        </div>
      <p className='text-xl text-white relative z-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam, provident deserunt, excepturi quae obcaecati quibusdam iste, labore praesentium consequatur veritatis repudiandae repellat soluta in pariatur. Ipsam sint repudiandae fugit!</p>
       </div>
    )
}


export default function AboutUs(){
            const buttontext = 'Más';
        return(
            <section className="px-2 xl:px-48 2xl:px-72 3xl:px-80 4xl:px-96 w-full h-screen bg-gradient-to-r from-blackdot-200 to-blackdot-100 relative">
                <BgElements/>
                <div className="flex flex-row">
                    <div className="basis-1/2  h-screen relative">
                        <CirclePerfil/>
                    </div>

                    <div className="basis-1/2">
                       
                            <RightText/>
                            <div className="button-wrapper flex flex-row justify-end px-4">
                            <CircleButton text={buttontext} />
                            </div>
                        
                    </div>
                </div>
            </section>
        )
}