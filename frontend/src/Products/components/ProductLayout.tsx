import { useState } from "react";
import { Modal } from "react-bulma-components";
import Header from "./Header";
import AddButton from "./AddButton";
import ListProducts from "./ListProducts";
import MyForm from "./MyForm";
import { saveProducts } from "../services";

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

  const handleSubmit = (data: ProductData) => {
    saveProducts(data);
  };

  return (
    <>
      <Header title={"Products app"} />
      <AddButton onClick={() => setIsModalOpen(true)} />
      <ListProducts />
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
    </>
  );
};

export default ProductLayout;
