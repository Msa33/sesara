import React from "react";
import {
  Package,
  ShoppingCart,
  Truck,
  LogOut,
  PlusCircle,
  Edit,
  Trash,
  Printer,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* -------------------- SIDEBAR -------------------- */}
      <aside className="w-64 bg-[#8C5E3E] text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Sésara Market</h1>

        <nav className="space-y-4">
          <Link to="/liste_produits" className="block hover:text-yellow-300">Produits</Link>
          <Link to="/liste_commandes" className="block hover:text-yellow-300">Commandes</Link>
          <Link to="/liste_livraisons" className="block hover:text-yellow-300">Livraisons</Link>
        </nav>

        <button className="flex items-center gap-2 mt-10 text-white hover:text-red-300">
          <LogOut size={20} /> Se déconnecter
        </button>
      </aside>

      {/* -------------------- CONTENU PRINCIPAL -------------------- */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#8C5E3E] mb-6">
          Tableau de bord Administrateur
        </h2>

        {/* -------------------- STATISTIQUES -------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow p-6 rounded-xl flex items-center gap-4">
            <Package className="text-[#8C5E3E]" size={35} />
            <div>
              <p className="text-sm text-gray-500">Produits</p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-xl flex items-center gap-4">
            <ShoppingCart className="text-[#8C5E3E]" size={35} />
            <div>
              <p className="text-sm text-gray-500">Commandes</p>
              <p className="text-xl font-bold">13</p>
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded-xl flex items-center gap-4">
            <Truck className="text-[#8C5E3E]" size={35} />
            <div>
              <p className="text-sm text-gray-500">Livraisons</p>
              <p className="text-xl font-bold">5</p>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* -------------------- SECTION PRODUITS -------------------- */}
        {/* ========================================================== */}

        <section id="produits" className="mb-14">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-700">Gestion des Produits</h3>
            <Link to="/ajout_produit">
                <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <PlusCircle className="mr-2" /> Ajouter un produit
            </button>
            </Link>
          </div>

          <div className="bg-white shadow rounded-xl p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Nom</th>
                  <th>Prix</th>
                  <th>Catégorie</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-2">Sésame Doré</td>
                  <td>45000 XAF</td>
                  <td>Sésame</td>
                  <td className="flex gap-2 py-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="py-2">Arachide</td>
                  <td>35000 XAF</td>
                  <td>Arachide</td>
                  <td className="flex gap-2 py-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================== */}
        {/* -------------------- SECTION COMMANDES ------------------- */}
        {/* ========================================================== */}

        <section id="commandes" className="mb-14">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Gestion des Commandes
          </h3>

          <div className="bg-white shadow rounded-xl p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Client</th>
                  <th>Montant</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-2">Moussa</td>
                  <td>120 000 XAF</td>
                  <td>En attente</td>
                  <td className="flex gap-2">
                    <button className="text-green-600 hover:text-green-800">
                      <Printer size={18} />
                    </button>
                    <button className="text-blue-600 hover:text-blue-800">
                      <CheckCircle size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================== */}
        {/* -------------------- SECTION LIVRAISONS ------------------ */}
        {/* ========================================================== */}

        <section id="livraisons" className="mb-10">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Gestion des Livraisons
          </h3>

          <div className="bg-white shadow rounded-xl p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Livraison</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-2">CMD-2025-01</td>
                  <td>En cours</td>
                  <td>
                    <button className="text-green-600 hover:text-green-800 flex items-center gap-2">
                      <CheckCircle size={18} /> Valider
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
