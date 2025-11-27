
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
  )  
}


