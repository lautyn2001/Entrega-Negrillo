import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="detail-container">
      <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "10px" }} />

      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>${item.price}</h3>

      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail;