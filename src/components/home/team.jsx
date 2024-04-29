
import foto01 from '../../assets/img/150x15foto.svg'; 
import foto02 from '../../assets/img/foto02.svg'; 



function BgElements(){
    return(
        <>  
            <p className="twobg textstroke textbgsize absolute -top-28 -right-10 z-30 opacity-50 font-black">04</p>
        </>
    )
}
const TeamCard = ({perfil}) => {
            const cardlist = perfil.map(card => 
            
                <div className='ccard h-[350px] w-[300px]  relative mx-5'>
                    <div className="pic w-[90%] h-full overflow-hidden  ml-auto bg-gray-300">
                        <img src={card.pic} alt="foto01" className='w-full h-full object-cover'/>
                    </div>
                
                <div className="footer-cardperfil absolte bottom-0 right-0 h-[80px] bg-blackdot-100 p-4">
                <div className="name font-black text-white text-xl">
                        <p>{card.name}</p>
                    </div>
                    <div className="rol text-white text-md">
                        <p>{card.rol}</p>
                    </div>
                </div>
                </div>
            ); 

            return (
                <div className='flex flex-row py-5 justify-center z-30 relative'>
                    {cardlist}
                </div>
            )
}

export default function Team(){
  
    const dt =  [
            {
                name : 'Yeison Armas',
                rol : 'Desarrollador Web',
                pic : foto01
            },
            {
                name : 'Javier Torrealba',
                rol : 'Marketing',
                pic : foto02
            }
        ]
    
    return (
            <section className="px-2 xl:px-48 2xl:px-72 3xl:px-80 4xl:px-96 h-screen w-full max-w-screen bg-gradient-to-r from-blackdot-200 to-blackdot-100 relative">
                <div className="title-teams text-center w-full block pt-12 px-14 relative z-30">
                        <sub className='text-white font-bold text-xl'>Miembros del equipo</sub>
                    <h2 className='text-white text-4xl font-black uppercase space-x-1'>Equipo de Profesionales +5 años de Experiencia en la Materia</h2>
                </div>
                    <TeamCard perfil={dt}/>
                    <BgElements/>
                   
            </section>
    )
}