import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <Link className="btn" to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;