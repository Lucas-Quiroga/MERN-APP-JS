import { useState } from "react";
import { Modal } from "react-bulma-components";
import Header from "./Header";
import AddButton from "./AddButton";
import ListProducts from "./ListProducts";

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header title={"Hola a la app"} />
      <AddButton onClick={() => setIsModalOpen(true)} />
      <ListProducts />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Header>Form</Modal.Card.Header>
          <Modal.Card.Body>Formulario Aqui</Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  );
};

export default ProductLayout;
