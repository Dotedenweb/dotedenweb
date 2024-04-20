import Logo from '../assets/img/dotedenweblogo.svg';

function Navigation(){
        return (
           <nav className="px-2 xl:px-48 py-2 flex flex-row absolute top-0 left-0 h-[80px] w-full z-20">
                <div className="logo mr-auto max-w-[120px] flex justify-center items-center">
                    
                   <img src={Logo} alt="Doteden" />
                   <h1 className=' text-white mx-2 font-bold text-xl uppercase hidden'>Doteden</h1>
                </div>

                <div class="hidden w-full md:w-auto md:flex flex-row items-center" id="navbar-default">
      <ul class="font-medium flex flex-row p-4 md:p-0  text-lg items-center">
        <li>
          <a href="#" class="block py-2 px-3 text-white " aria-current="page">Servicios</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white">Nosotros</a>
        </li>
       
      </ul>
      <button className='border border-eden-200 hover:ring-1 hover:ring-yelldots-100/50 rounded-full px-4 text-xs font-black uppercase text-black bg-eden-100 h-[35px] hover:shadow-yelldots-200/10 hover:bg-eden-200 hover:text-white shadow-2xl ease-linear duration-100'>Contactar</button>
    </div>
           </nav>
        )
}

export default function Header(){
    return (
       
            <Navigation />
       
    )
}