import { useState } from "react";
import { product } from "../data/product";
import UnProduit from "./UnProduits";

export default function MesProduits() {
  const [filter, setFilter] = useState<"tous" | "sésame" | "arachide">("tous");

  // --- Fonction de gestion des filtres ---
  const handleFilter = (type: "tous" | "sésame" | "arachide") => {
    setFilter(type);
  };

  // --- Filtrage logique ---
  const filteredProducts = product.filter((p) => {
    if (filter === "tous") return true;
    return p.categorie === filter;
  });

  return (
    <div className="py-12 bg-[#FFF8E7] sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        <h1 className="text-2xl text-[#8C5E3E] font-bold">Catégories</h1>

        <div className="text-lg text-gray-500 px-4">

          <input
            type="checkbox"
            checked={filter === "tous"}
            onChange={() => handleFilter("tous")}
          />
          <label className="mx-4">Tous</label>
          <br />

          <input
            type="checkbox"
            checked={filter === "sésame"}
            onChange={() => handleFilter("sésame")}
          />
          <label className="mx-4">Sésames</label>
          <br />

          <input
            type="checkbox"
            checked={filter === "arachide"}
            onChange={() => handleFilter("arachide")}
          />
          <label className="mx-4">Arachides</label>
        </div>

        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#8C5E3E] sm:text-3xl">
            Nos Produits
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3">
          {filteredProducts.map((produit, index) => (
            <UnProduit
              key={index}
              nomProduit={produit.nom}
              prix={produit.prix}
              image={produit.image}
              poid={produit.poid}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
