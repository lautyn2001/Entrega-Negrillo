import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <div>
      🛒 <span style={{ fontWeight: "bold" }}>{totalItems}</span>
    </div>
  );
}

export default CartWidget;