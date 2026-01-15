import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getProductById } from "../services/productsService";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(id)
      .then(res => setProduct(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  return product ? <ItemDetail item={product} /> : <p>Producto no encontrado</p>;
}

export default ItemDetailContainer;