
import { SlideShow } from './Carousel';
export default function Hero (){

    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-[#FFF8E7] ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-[#8B5E3E] sm:text-6xl lg:text-7xl">
                                Bienvenue sur 
                            </h1>
                            <h1 className="relative text-4xl font-bold text-[#8B5E3C] sm:text-6xl lg:text-7xl">Sésara Marcket.</h1>
                            <p className="mt-8 text-base text-gray-600 sm:text-xl">Découvrez le meilleur du sésame et de l'arachide, cultivés avec passion. Des produits frais et authentiques,
                                   livrés chez directement vous pour une alimentation saine et savoureuse. Votre goût, notre engagement.</p>
                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 hover:bg-green-600 focus:bg-green-600 rounded-md" role="button"> Commander Maintenant</a>
                            </div>
                        </div>
                        <div>
                            <SlideShow/>
                        </div>
                    </div>
                </div>
        </section>
    
        /* <div className="bg-gradient-to-b from-green-50 to-green-100">
    <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex">
                        <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg" alt="" />
                    </a>
                </div>

                <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    
                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    
                    <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

                    <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>

                    <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

                    <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>

                    <div className="w-px h-5 bg-black/20"></div>

                    <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </a>

                    <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
                </div>
            </div>
        </div>
    </header> 
        code formateur Header Logo

<header className="bg-white shadow-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm">
                    </div>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Logo</span>
            </div>
        </div>
    </div>
</header>

    */
  )  
}


