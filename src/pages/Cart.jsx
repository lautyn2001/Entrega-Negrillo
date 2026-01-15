import { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const {
    cart,
    removeItem,
    decreaseItem,
    increaseItem,
    clearCart,
    totalPrice,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>El carrito está vacío</h2>;
  }

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Tu carrito</h2>

      {cart.map((prod) => (
        <div key={prod.id} className="cart-item">
          <img src={prod.image} alt={prod.title} />

          <div className="cart-info">
            <h4>{prod.title}</h4>
            <p>Precio: ${prod.price}</p>
            <p>Cantidad: {prod.quantity}</p>
            <p>Subtotal: ${prod.price * prod.quantity}</p>
          </div>

          <div className="cart-actions">
            <button className="btn" onClick={() => decreaseItem(prod.id, 1)}>
              -
            </button>
            <button className="btn" onClick={() => increaseItem(prod.id, 1)}>
              +
            </button>
            <button className="btn" onClick={() => removeItem(prod.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">Total: ${totalPrice}</div>

      <div className="cart-buttons">
        <Link to="/checkout">
          <button className="btn">Ir a pagar</button>
        </Link>

        <button className="btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;