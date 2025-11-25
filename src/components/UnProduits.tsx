import { useCart } from "../context/CarteContext";

type ProduitProps = {
  nomProduit: string;
  prix: string | number;
  image: string;
  poid: string;
};

function UnProduit(props: ProduitProps) {
  const { addToCart } = useCart();
  const { nomProduit, prix, image, poid } = props;

  const AjouterPanier = () => {
    addToCart({
      nomProduit,
      prix,
      image,
      poid,
      quantity: 1,
    });
  };

  return (
    <div>
      <div className="relative group shadow-xl/20">
        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
            src={image}
            alt={nomProduit}
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button
              onClick={AjouterPanier}
              className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600"
            >
              Ajouter au panier
            </button>
          </div>
        </div>

        <div className="flex items-start justify-center mt-4 space-x-4">
          <div>
            <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
              {nomProduit}
            </h3>
            <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">
              {poid}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
              {prix}
            </p>
            <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
              60.000
            </del>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnProduit;
