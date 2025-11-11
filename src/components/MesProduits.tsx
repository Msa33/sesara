import { product } from "../data/product"
import UnProduit from "./UnProduits"
export default function MesProduits (){
    
    return (
        <div className="py-12 bg-[#FFF8E7] sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <h1 className="text-2xl text-[#8C5E3E] font-bold ">Catégories</h1>
                    <div className="text-lg text-gray-500 px-4 ">
                        <input type="checkbox"></input><label htmlFor="" className='mx-4'>Sésames</label><br/>
                        <input type="checkbox" className=''></input><label htmlFor="" className='mx-4'>Arachides</label>
                    </div>

                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-bold text-[#8C5E3E] sm:text-3xl">Nos Produits</h2>
                        <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3">

                        {product.map((produ, index)=> (
                            <UnProduit key={index} image={produ.image} prix={produ.prix} poid={produ.poid} nom={produ.nom} />
                        ))}
                        {/* Produit : Sésame Doré
                        <UnProduit image={Sdoré} nomProduit='Sésame Doré' prix={'45.000 XAF'} poid='50 Kg'/>

                        {/* Produit : Arachide *
                        <UnProduit image={Arachide} nomProduit='Arachide' prix={'35.000 XAF'} poid='50 Kg'/>

                        {/* Produit : Sésame Noir *
                        <UnProduit nomProduit='Sésame Noir'image={sésaNoir} prix={'45.000 XAF'} poid='50 Kg'/>   

                      {/* Produit : Sésame Blanc *
                       <UnProduit nomProduit='Sésame Blanc' image={SBlanc} prix={'45.000 XAF'} poid='50 Kg'/>

                        {/* Produit : Sésame Doré *
                       <UnProduit nomProduit='Sésame Doré' image={Sdoré} prix={'45.000 XAF'} poid='50 Kg'/>

                        {/* Produit : Arachide *
                       <UnProduit nomProduit='Arachide' image={Arachide} prix={'45.000 XAF'} poid='50 Kg'/> */}
                           
                    </div>
            </div>
        </div>
    )
}