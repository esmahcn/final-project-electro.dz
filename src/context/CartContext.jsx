import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

// ✅ Provider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if it already exists
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add new product
        return [...prevItems, { ...product, qty: 1 }];
      }
    });

    // Update total count
    setCartCount((prev) => prev + 1);
  };

  // Remove item
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
      if (!itemToRemove) return prevItems;
      setCartCount((prev) => prev - itemToRemove.qty);
      return prevItems.filter((item) => item.id !== id);
    });
  };

  // Clear cart
  const resetCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook for easier access
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
