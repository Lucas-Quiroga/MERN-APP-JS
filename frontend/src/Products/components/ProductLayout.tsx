import { useState, useEffect } from "react";
import { Modal, Container } from "react-bulma-components";
import Header from "./Header";
import AddButton from "./AddButton";
import ListProducts from "./ListProducts";
import MyForm from "./MyForm";
import Loading from "./Loading";
import { saveProducts, getProducts } from "../services";

//INTERFACE PARA EL TIPO OBJETO
interface ProductData {
  name: string;
  priceUnitary: string;
  size: string;
  description: string;
  image: string;
}

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //manera correcta de usar async await dentro de useEffect
  async function loadProducts() {
    const response = await getProducts();

    if (response?.status === 200) {
      //de la manera que lo establecimos en el backend
      setProducts(response.data.products);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (data: ProductData) => {
    await saveProducts(data);
    loadProducts();
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header title={"Products app"} />
      <AddButton onClick={() => setIsModalOpen(true)} />
      {isLoading && <Loading />}
      {!isLoading && !products.length && (
        <h2 className="title has-text-centered">You don't have products</h2>
      )}
      {!isLoading && products.length && <ListProducts products={products} />}

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Header showClose={false}>
            <Modal.Card.Title>Add Product</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <MyForm handleSubmit={handleSubmit} />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </Container>
  );
};

export default ProductLayout;
