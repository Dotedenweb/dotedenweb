

    function Basebutton(){
        return(
            <a className="w-[100px] h-[100px] rounded-full  border border-white text-white text-center block relative overflow-hidden group cursor-pointer">
                <span className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:text-black group-hover:font-bold ease-linear duration-100 delay-75">
                Ver Planes
                </span>
                <span className="w-[80px] h-[80px] absolute top-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2  group-hover:top-3/4 bg-gray-300/80 rounded-full  ease-in-out duration-300 z-10"></span>
                <span className="w-[100px] h-[100px] absolute -top-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2  group-hover:top-1/2 bg-white rounded-full  ease-in-out duration-300 z-0"></span>
            </a>
        )
    }



export default function CircleButton(){
    return (
        <div className="wrapper my-4">
                <Basebutton/>
        </div>
    )
}