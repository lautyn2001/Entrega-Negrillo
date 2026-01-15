import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="detail-container">
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>${item.price}</h3>

<ItemCount stock={item.stock} initial={1} item={item} />
    </div>
  );
}

export default ItemDetail;