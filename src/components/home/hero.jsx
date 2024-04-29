import CircleButton from "../circlebutton"
import HeroImage from '../../assets/img/heroimage.jpeg';

 
function BackgroundHero(){
    return (
        <div className="wraper absolute top-0 left-0 w-full h-full right-0 bottom-0 z-0">
           <div className="layter w-1/2 h-full overflow-hidden ml-auto">
            <img src={HeroImage} alt="heroimage" className="object-cover h-full w-full"/>
           </div>
        </div>
    )
}

function Maintext(){

    
    return (
        <div className="wrapper  mt-12">
           
          
           <div className="textws relative w-full">
            <h2 className="text-5xl font-black text-white uppercase leading-normal">
               Moderniza y haz crecer tu negocio
        </h2>
        <h2 className="text-5xl font-black  uppercase leading-normal textstroke absolute z-0 -top-3 left-5 opacity-45">
               Moderniza y haz crecer tu negocio
        </h2>
            </div>
         
           
        <p className="font-light text-white text-lg">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, blanditiis nesciunt minima sapiente beatae ab voluptate nobis eum minus enim.
        </p>
        
        </div>
        
    )
}


export default function Hero(){
 
             
    return(
        <section className="px-2 xl:px-48 h-screen	w-full relative py-[80px]" id="hero">
               <div className="overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10"></div>
               <div className="flex flex-col lg:flex-row h-full items-center relative z-10">
                    <div className="basis-full lg:basis-7/12" data-aos="fade-up" data-aos-duration="1000">
                 
                    <Maintext/>
                
                    <CircleButton text='Ver Planes'/>
                    </div>

               </div>
               <BackgroundHero/>
        </section>
    )
}