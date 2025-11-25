import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: "20px" }}>
      <button className="btn" onClick={() => count > 1 && setCount(count - 1)}>-</button>

      <span style={{ margin: "0 15px", fontSize: "20px" }}>{count}</span>

      <button className="btn" onClick={() => count < stock && setCount(count + 1)}>+</button>

      <button className="btn" style={{ marginLeft: "20px" }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;