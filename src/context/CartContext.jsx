import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const exists = cart.find(prod => prod.id === item.id);

    if (exists) {
      setCart(
        cart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const decreaseItem = (id, amount = 1) => {
    setCart(prev =>
      prev
        .map(prod =>
          prod.id === id
            ? { ...prod, quantity: prod.quantity - amount }
            : prod
        )
        .filter(prod => prod.quantity > 0)
    );
  };

  const increaseItem = (id, amount = 1) => {
    setCart(prev =>
      prev.map(prod =>
        prod.id === id
          ? { ...prod, quantity: prod.quantity + amount }
          : prod
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        increaseItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}