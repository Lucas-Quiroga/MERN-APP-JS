interface ProductData {
  name: string;
  priceUnitary: string;
  size: string;
  description: string;
  image: string;
}

interface ListProductsProps {
  products: Array<ProductData>;
}

const ListProducts = ({ products }: ListProductsProps) => {
  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (!products.length) {
  //   return <h2 className="title has-text-centered">You don't have products</h2>;
  // }

  return <div> "Mostrar listado"</div>;
};

export default ListProducts;
