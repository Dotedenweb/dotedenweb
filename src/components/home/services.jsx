
import ExploreButton from "../explorebutton"
import webicon from '../../assets/img/webicon.svg';
import megaicon from '../../assets/img/megaicon.svg'

function BgElements(){
    return(
        <>  
            <p className="twobg textstroke textbgsize absolute -top-28 -right-10 z-20 opacity-50 font-black">02</p>
        </>
    )
}


function ServiceCard({icon, data}){
    const {title, subtitle, description, tagline, alt} = data;
        return(
            <>
                <article className="h-[450px] w-full gradientgreen rounded-xl ring ring-eden-200/50 shadow-2xl shadow-white/10">
                    <div className="headicon w-full flex flex-row justify-center py-4">
                        <img src={icon} alt={alt}  className="w-[100px] h-[100px]" />
                    </div>
                    <div className="tagline px-4 flex flex-row justify-center my-4">
                        <p className="text-white text-lg text-start">{tagline}</p>
                    </div>
                    <div className="description px-4 flex flex-row justify-center">
                        <p className="text-white text-lg text-start">{description}</p>
                    </div>
                    <div className="px-4 my-4">
                        <h2 className="text-white font-black text-2xl">{title}</h2>
                        <p className="text-xl text-white">{subtitle}</p>
                    </div>
                </article>
            </>
        )
}

function CardLarge({data}){
    const {title, description} = data;
    const textButton = 'Más información';
            return(
                <>
                        <div className="article large-card h-[450px] w-full gradientgreen text-white p-5 rounded-xl relative ring ring-eden-200/50 shadow-2xl shadow-white/10">
                            <p className="text-3xl font-bold">{title}</p>
                            <p className="font-black text-5xl leading-snug">{description}</p>
                            <div className="footer-card absolute bottom-0 left-0 py-4 px-4 w-full">
                                <ExploreButton text={textButton}/>
                                <span className="linewhite bg-white h-px w-[150px] top-1/2 right-4 -translate-y-1/2 absolute"></span>
                            </div>
                        </div>
                </>
            )
}

export default function Services(){
    const largetext = {
        title : 'Servicios',
        description : 'Nuestros servicios como Agencia Digital'
    }
    const service01 ={
        title : 'Diseño y Desarrollo Web',
        subtitle : 'Sitios Web',
        description : 'Portafolios, blogs, sitios web para empresas e Ecommerces para tu tienda online',
        tagline : 'Tu presencia digital',
        alt : 'webicon'
    }
    const service02 ={
        title : 'Marketing Digital',
        subtitle : 'Anuncios',
        description : 'Optimiza tu capacidad para ganar nuevos clientes a través de redes sociales',
        tagline : 'Mejora tu presencia en redes sociales',
        alt : 'marketing'
    }
    return(
        <section className="px-2 xl:px-48 2xl:px-72 3xl:px-80 4xl:px-96 h-screen w-full max-w-screen bg-gradient-to-r from-blackdot-200 to-blackdot-100 flex flex-row items-center  relative">
                <div className="basis-5/12 mr-2" data-aos="fade-left">
                    <CardLarge data={largetext}/>
                </div>
                <div className="basis-7/12">
                    <div className="container w-full flex flex-row">
                        <div className="basis-5/12 mx-2" data-aos="fade-down">
                        <ServiceCard icon={webicon} data={service01} />
                        </div>

                        <div className="basis-5/12  mx-2" data-aos="fade-up">
                        <ServiceCard icon={megaicon} data={service02}/>
                        </div>
                    </div>

                </div>
            <BgElements/>
        </section>
    )
}