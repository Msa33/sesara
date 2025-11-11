import SBlanc from '../assets/SBlanc.png'
import Sdoré from '../assets/Sdoré.png'
import sésaNoir from '../assets/sésaNoir.png'
import Arachide from '../assets/Arachide.png'
import UnProduit from './UnProduits'
import { ShoppingBag } from 'lucide-react';
import { Command } from 'lucide-react';
import { Truck } from 'lucide-react';
import { Handshake } from 'lucide-react';

export default function Feature() {

    return (
        <>
        <section className="py-12 bg-[#FFF8E7] border-t-2 border-gray-300 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#8C5E3E] sm:text-3xl">Nos Produits</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3">

                    {/* Produit : Sésame Doré */}
                        <UnProduit image={Sdoré} nomProduit='Sésame Doré' prix={'45.000 XAF'} />

                        {/* Produit : Arachide */}
                        <UnProduit image={Arachide} nomProduit='Arachide' prix={'35.000 XAF'}/>

                        {/* Produit : Sésame Noir */}
                        <UnProduit nomProduit='Sésame Noir'image={sésaNoir} prix={'45.000 XAF'} />   

                      {/* Produit : Sésame Blanc */}
                       <UnProduit nomProduit='Sésame Blanc' image={SBlanc} prix={'45.000 XAF'} />

                        {/* Produit : Sésame Doré */}
                       <UnProduit nomProduit='Sésame Doré' image={Sdoré} prix={'45.000 XAF'}/>

                        {/* Produit : Arachide */}
                       <UnProduit nomProduit='Arachide' image={Arachide} prix={'45.000 XAF'} />

                </div>
            </div>
        </section>

                <section className="py-10 bg-[#FFF8E7] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#8C5E3E] sm:text-4xl lg:text-5xl">Nos Services</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-2 lg:grid-cols-4 gap-x-12">
                <div className='shadow-xl/20'>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFF8E7] border-2  border-green-600 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700"><ShoppingBag className='text-green-600'/></span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Achat</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <div className='shadow-xl/20'>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFF8E7] border-2  border-green-600 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700"> <Command className='text-green-600'/></span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Commande</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <div className='shadow-xl/20'>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFF8E7] border-2 border-green-600 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700"><Truck className='text-green-600'/></span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Livraison</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                
                <div className='shadow-xl/20'>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#FFF8E7] border-2 border-green-600 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 "><Handshake className='text-green-600'/></span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Assistance 24/7</h3>
                <p className="mt-4 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl.</p>
                </div>
            </div>
            </div>
        </div>
        </section>

    </>
    );
}
