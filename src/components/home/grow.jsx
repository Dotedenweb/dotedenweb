import tinylines from '../../assets/img/tinylinescute.svg';
import { FaCircleCheck } from "react-icons/fa6"
import meet from '../../assets/img/meet.jpg';

function BgElements(){
    return(
      <>
        <span className="onebg textstroke textbgsize absolute -top-24 -left-10 z-0 opacity-50 font-black">03</span>

       <img src={tinylines} alt="tinylines" className='absolute top-0 right-0 z-0 w-full h-auto object-contain opacity-50'/>
      </>
    )
}
function RightContent(){
        return (
            <>  
            <div className="firsttext my-4">
                <p className='textstroke text-5xl font-black uppercase'>5 años de experiencia</p>
            </div>
                <div className="rectangulepic w-full h-[80%] bg-white absolute bottom-0 right-0 layer overflow-hidden">
                    <img src={meet} alt="meet.jpg"  className='w-full h-full object-cover  object-right-top'/>
                </div>
            </>
        )
}
function LeftContent(){
    return(
        <> 
            <div className='title mt-14'>
            <h3 className='text-6xl text-white font-black'>Moderniza y Haz crecer tu negocio</h3>
            </div>

            <div className="taglinesgrow tagline01 mt-10 mb-5">
                <div className="flex flex-row items-center">
                <span className='mr-4'><FaCircleCheck /></span> <p className='text-white font-bold text-2xl'>Agencia profesional</p>
                </div>

            </div>
            <div className="taglinesgrow tagline02 mt-10 mb-5">
                <div className="flex flex-row items-center">
                <span className='mr-4'><FaCircleCheck /></span> <p className='text-white font-bold text-2xl'>Provedor de Soluciones</p>
                </div>

            </div>
        </>
    )
}
export default function Grow(){
    return(
        <section className="px-2 xl:px-48 2xl:px-72 3xl:px-80 4xl:px-96 w-full h-screen bg-gradient-to-r from-blackdot-200 to-blackdot-100 relative">
           
                <div className="flex flex-row h-screen justify-between">
                    <div className="basis-5/12">
                        <LeftContent/>
                    </div>
                    <div className="basis-6/12 relative z-40">
                        <RightContent/>
                    </div>
                </div>
                <BgElements/>
        </section>
    )
}