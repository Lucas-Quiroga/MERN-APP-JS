import { useState } from "react";
import { Modal } from "react-bulma-components";
import Header from "./Header";
import AddButton from "./AddButton";
import ListProducts from "./ListProducts";
import MyForm from "./MyForm";

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <MyForm />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  );
};

export default ProductLayout;
