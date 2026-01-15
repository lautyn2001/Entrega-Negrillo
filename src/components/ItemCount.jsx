import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({ stock, initial, item }) {
  const [count, setCount] = useState(initial);
  const { addItem } = useContext(CartContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        className="btn"
        onClick={() => count > 1 && setCount(count - 1)}
      >
        -
      </button>

      <span style={{ margin: "0 15px", fontSize: "20px" }}>
        {count}
      </span>

      <button
        className="btn"
        onClick={() => count < stock && setCount(count + 1)}
      >
        +
      </button>

      <button
        className="btn"
        style={{ marginLeft: "20px" }}
        onClick={() => addItem(item, count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;