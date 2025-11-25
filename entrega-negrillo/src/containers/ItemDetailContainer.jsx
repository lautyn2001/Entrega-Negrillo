import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === id));
      }, 500);
    });

    fetchItem.then(res => setProduct(res));
  }, [id]);

  return product ? <ItemDetail item={product} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;