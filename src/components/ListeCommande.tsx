import MainLayout from "../layouts/MainLayout";

export default function Orders() {
  const orders = [
    { id: 1, client: "Ali", amount: 4500, status: "En attente" },
    { id: 2, client: "Mariam", amount: 6000, status: "En préparation" },
    { id: 3, client: "Dramane", amount: 7500, status: "Expédiée" },
    { id: 4, client: "Oumar", amount: 5000, status: "Livrée" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En attente": return "bg-yellow-500";
      case "En préparation": return "bg-blue-500";
      case "Expédiée": return "bg-purple-500";
      case "Livrée": return "bg-green-600";
      default: return "bg-gray-500";
    }
  };

  return (
    <MainLayout>
      <h1 className="text-[#8B5E3E] text-3xl font-bold mb-8">Liste des commandes</h1>

      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">ID</th>
            <th className="p-4">Client</th>
            <th className="p-4">Montant</th>
            <th className="p-4">Statut</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b">
              <td className="p-4">{o.id}</td>
              <td className="p-4">{o.client}</td>
              <td className="p-4">{o.amount} FCFA</td>
              <td className="p-4">
                <span
                  className={`text-white px-3 py-1 rounded ${getStatusColor(
                    o.status
                  )}`}
                >
                  {o.status}
                </span>
              </td>

              <td className="p-4">
                <button className="px-4 py-1 bg-blue-600 text-white rounded mr-2">
                  Voir
                </button>
                <button className="px-4 py-1 bg-green-600 text-white rounded">
                  Livrer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
}
