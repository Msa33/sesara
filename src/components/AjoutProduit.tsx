import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Produit ajouté :", product);
    alert("Produit ajouté avec succès !");
  };

  return (
    <MainLayout>
      <h1 className="text-[#8B5E3E] text-3xl font-bold mb-8">Ajouter un produit</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded-xl max-w-2xl space-y-4"
      >
        <input
          name="name"
          onChange={handleChange}
          placeholder="Nom du produit"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-3 rounded"
        />

        <input
          name="price"
          type="number"
          onChange={handleChange}
          placeholder="Prix"
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          onChange={handleChange}
          placeholder="Catégorie"
          className="w-full border p-3 rounded"
        />

        <input
          name="image"
          onChange={handleChange}
          placeholder="URL de l'image"
          className="w-full border p-3 rounded"
        />

        <button className="bg-green-600 text-white px-5 py-2 rounded">
          Ajouter
        </button>
      </form>
    </MainLayout>
  );
}
