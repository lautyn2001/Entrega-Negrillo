import { useContext, useState } from "react";
import "../styles/checkout.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  runTransaction,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const getNextOrderNumber = async () => {
    const counterRef = doc(db, "counters", "orders");

    const newNumber = await runTransaction(db, async (transaction) => {
      const snap = await transaction.get(counterRef);

      if (!snap.exists()) {
        transaction.set(counterRef, { current: 1 });
        return 1;
      }

      const current = snap.data().current;
      const next = current + 1;
      transaction.update(counterRef, { current: next });
      return next;
    });

    return newNumber;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !buyer.name ||
      !buyer.email ||
      !buyer.phone ||
      !buyer.address ||
      !card.number ||
      !card.expiry ||
      !card.cvv
    ) {
      alert("Completá todos los campos");
      return;
    }

    const orderNumber = await getNextOrderNumber();

    const order = {
      orderNumber,
      buyer,
      items: cart.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        quantity: p.quantity,
      })),
      total: totalPrice,
      date: serverTimestamp(),
    };

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      setOrderNumber(orderNumber);
      clearCart();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

if (orderId) {
  return (
    <div className="order-success">
      <div className="order-card">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu pedido fue procesado con éxito.</p>

        <div className="order-number">
          #{orderNumber}
        </div>

        <p>
          Guardá este número para cualquier consulta sobre tu compra.
        </p>

        <Link to="/">
          <button className="btn">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}

  if (cart.length === 0) {
    return <h2>No hay productos en el carrito</h2>;
  }

return (
  <div className="checkout-wrapper">
    <div className="checkout-card">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <h4>Datos personales</h4>

        <div className="checkout-field">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkout-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkout-field">
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkout-field">
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={buyer.address}
            onChange={handleChange}
            required
          />
        </div>

        <h4>Datos de tarjeta</h4>

<div className="checkout-field">
  <input
    type="text"
    placeholder="Número de tarjeta"
    value={card.number}
    maxLength={16}
    onChange={(e) =>
      setCard({
        ...card,
        number: e.target.value.replace(/\D/g, ""),
      })
    }
    required
  />
</div>

<div className="checkout-field">
  <input
    type="text"
    placeholder="Vencimiento (MM/AA)"
    value={card.expiry}
    maxLength={5}
    onChange={(e) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length >= 3) {
        val = val.slice(0, 2) + "/" + val.slice(2, 4);
      }
      setCard({ ...card, expiry: val });
    }}
    required
  />
</div>

<div className="checkout-field">
  <input
    type="password"
    placeholder="CVV"
    value={card.cvv}
    maxLength={3}
    onChange={(e) =>
      setCard({
        ...card,
        cvv: e.target.value.replace(/\D/g, ""),
      })
    }
    required
  />
</div>
        <button
          className="btn checkout-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Procesando..." : "Finalizar compra"}
        </button>
      </form>
    </div>
  </div>
);
}

export default Checkout;
