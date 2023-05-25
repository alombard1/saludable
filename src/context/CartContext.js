import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    return cart;
  };

  const getCartLength = () => {
    return cart.length;
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    const total = cart.reduce((accumulator, item) => {
      if (item.sale_price !== null) {
        return accumulator + item.sale_price;
      } else {
        return accumulator + item.price;
      }
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        getCart,
        getCartLength,
        addToCart,
        removeFromCart,
        emptyCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
