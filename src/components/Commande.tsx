import { useState } from "react";
import emailjs from "emailjs-com";

type CommandeProps = {
  cart: any[];
  clearCart: () => void;
};

export default function Commande({ cart, clearCart }: CommandeProps) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour envoyer l'email
  const envoyerCommande = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      nom: formData.nom,
      email_client: formData.email,
      telephone: formData.telephone,
      adresse: formData.adresse,
      produits: cart
        .map(
          (item) =>
            `${item.nomProduit} - ${item.quantity} x ${item.prix} XAF`
        )
        .join("\n"),
      total: `${total} XAF`,
      dest_email: "msaaht33@gmail.com",
    };

    emailjs
      .send(
        "VOTRE_SERVICE_ID",
        "VOTRE_TEMPLATE_ID",
        templateParams,
        "VOTRE_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Commande envoyée avec succès !");
          clearCart();
        },
        (error) => {
          console.log(error);
          alert("Erreur lors de l'envoi de la commande.");
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#8C5E3E] mb-6">
        Finaliser votre commande
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Formulaire */}
        <form onSubmit={envoyerCommande} className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Informations personnelles</h2>

          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            className="w-full border p-2 mb-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            className="w-full border p-2 mb-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="telephone"
            placeholder="Numéro de téléphone"
            className="w-full border p-2 mb-3 rounded"
            onChange={handleChange}
            required
          />

          <textarea
            name="adresse"
            placeholder="Adresse de livraison"
            className="w-full border p-2 mb-3 rounded"
            rows={4}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
          >
            Valider la commande
          </button>
        </form>

        {/* Résumé du panier */}
        <div className="bg-gray-100 p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Résumé du panier</h2>

          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>
                {item.nomProduit} (x{item.quantity})
              </span>
              <span>{item.prix * item.quantity} XAF</span>
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="text-lg font-bold">
            Total : <span className="text-green-700">{total} XAF</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
