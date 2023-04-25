import Header from "./Header";
import AddButton from "./AddButton";
import ListProducts from "./ListProducts";

const ProductLayout = () => {
  return (
    <>
      <Header title={"Hola a la app"} />
      <AddButton />
      <ListProducts />
    </>
  );
};

export default ProductLayout;
