import { createContext, useContext, useState } from "react";

type CartItem = {
  nomProduit: string;
  prix: number | string;
  image: string;
  poid: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (nomProduit: string) => void;
  decreaseQuantity: (nomProduit: string) => void;
  removeFromCart: (nomProduit: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existe = prev.find((item) => item.nomProduit === product.nomProduit);

      if (existe) {
        return prev.map((item) =>
          item.nomProduit === product.nomProduit
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, product];
    });
  };

  const increaseQuantity = (nomProduit: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.nomProduit === nomProduit
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (nomProduit: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.nomProduit === nomProduit && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (nomProduit: string) => {
    setCart((prev) =>
      prev.filter((item) => item.nomProduit !== nomProduit)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
