import { useState, useEffect } from "react";
import { getProducts } from "../services";
import Loading from "./Loading";

const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //manera correcta de usar async await dentro de useEffect
    async function loadProducts() {
      const response = await getProducts();

      if (response?.status === 200) {
        //de la manera que lo establecimos en el backend
        setProducts(response.data.products);
      }

      setIsLoading(false);
    }

    loadProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!products.length) {
    return (
      <h2 className="title has-text-centered">2You don't have products</h2>
    );
  }

  return <div> "Mostrar listado"</div>;
};

export default ListProducts;
