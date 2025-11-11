import Logo_Sésara from '../assets/Logo_Sésara.png'
function SésaraLogo () {

    return (
        <div className="flex justify-center">
             <img src={Logo_Sésara} alt="Logo de Sésara Marcket" className='w-20 h-20 '/>
             <span className="self-center text-3xl text-[#8C5E3E] font-bold whitespace-nowrap dark:text-white">Sésara Marcket</span>
        </div>
    )
}

export default SésaraLogo