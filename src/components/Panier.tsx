import React from "react";
import { useCart } from "../context/CarteContext";

export default function Panier() {
  const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  return (
    <div className="bg-[#FFF8E7]">
            <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold text-[#8C5E3E] mb-6 text-center">Votre Panier</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white shadow rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.nomProduit}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h2 className="font-bold text-gray-900">{item.nomProduit}</h2>
                    <p className="text-sm text-gray-600">{item.poid}</p>
                    <p className="font-semibold text-green-700">{item.prix} XAF</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Boutons quantité */}
                  <button
                    onClick={() => decreaseQuantity(item.nomProduit)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span className="font-bold">{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>

                  {/* Supprimer */}
                  <button
                    onClick={() => removeFromCart(item.nomProduit)}
                    className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Zone total */}
          <div className="mt-10 bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-900">Total : {total} XAF</h2>
                 <button
                    onClick={() => alert("Fonction Commander à implémenter…")}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold w-full"
                >
                    Commander
                </button>       
          </div>
        </>
      )}
    </div>
    </div>
    
  );
}
