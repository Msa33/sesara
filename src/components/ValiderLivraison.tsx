import MainLayout from "../layouts/MainLayout";

export default function ValidateDelivery() {
  const delivery = {
    id: 12,
    order: 3,
    client: "Mariam",
    status: "En cours",
    address: "Avenue Charles de Gaulle, N'Djamena",
  };

  const validate = () => {
    alert("Livraison validée !");
  };

  return (
    <MainLayout>
      <h1 className="text-[#8B5E3E] text-3xl font-bold mb-8">Validation de livraison</h1>

      <div className="bg-white p-6 shadow rounded-xl max-w-xl space-y-4">
        <p><strong>ID Livraison :</strong> {delivery.id}</p>
        <p><strong>Commande :</strong> {delivery.order}</p>
        <p><strong>Client :</strong> {delivery.client}</p>
        <p><strong>Adresse :</strong> {delivery.address}</p>

        <p>
          <strong>Statut :</strong>{" "}
          <span className="bg-yellow-500 text-white px-3 py-1 rounded">
            {delivery.status}
          </span>
        </p>

        <button
          onClick={validate}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Valider la livraison
        </button>
      </div>
    </MainLayout>
  );
}
