import { useState } from "react";
import { useCart } from "../context/CarteContext";
import Champs from "./inputes";
import SésaraLogo from "./logo";

export default function Commander() {
  const { cart, clearCart } = useCart();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");

  // Calcul du total
  const total = cart.reduce(
  (sum, item) => sum + Number(item.prix.replace(/\s/g, '').replace('XAF', '')) * item.quantity,
  0
);

  const validerCommande = () => {
    if (!nom || !email || !telephone || !adresse) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    alert(
      "Commande validée !\n\n" +
      "Nom: " + nom + "\n" +
      "Email: " + email + "\n" +
      "Téléphone: " + telephone + "\n" +
      "Adresse: " + adresse + "\n\n" +
      "Total: " + total + " XAF"
    );

    // Vider le panier
    clearCart();
  };

  return (
    <div className="bg-[#FFF8E7] min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <SésaraLogo />  
        {/* Titre */}
        <h1 className="text-3xl font-bold text-[#8C5E3E] text-center mb-8">
          Finaliser la commande
        </h1>

        {/* Formulaire */}
        <div className="bg-[#FFF8E7] shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Informations du client</h2>

          <Champs
            type="text"
            placeholder="Nom complet"
            className="bg-white w-full p-2 border rounded mb-4"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <Champs
            type="email"
            placeholder="Adresse email"
            className="bg-white w-full p-2 border rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Champs
            type="text"
            placeholder="Téléphone"
            className=" bg-white w-full p-2 border rounded mb-4"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />

          <textarea
            placeholder="Adresse de livraison"
            className="bg-white w-full p-2 border rounded mb-4"
            rows={3}
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          ></textarea>
        </div>

        {/* Récap Panier */}
        <div className="bg-[#FFF8E7] shadow p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Votre commande</h2>

          {cart.length === 0 ? (
            <p className="text-gray-600">Votre panier est vide.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b pb-2"
                >
                  <span>
                    {item.nomProduit} × {item.quantity}
                  </span>
                  <span className="font-bold">
                    {item.prix} XAF
                  </span>
                </div>
              ))}

              {/* Total */}
              <div className="text-xl font-bold text-right mt-4">
                Total : {total.toLocaleString()} XAF
              </div>
            </div>
          )}
        </div>

        {/* Bouton Valider */}
        <button
          onClick={validerCommande}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
        >
          Valider la commande
        </button>
      </div>
    </div>
  );
}
