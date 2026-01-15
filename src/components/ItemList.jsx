import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="cards-container">
      {items.map(prod => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
}

export default ItemList;