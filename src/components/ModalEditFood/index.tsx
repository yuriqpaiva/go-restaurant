import { Ref, useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FoodData } from "../../types";
import { FormHandles } from "@unform/core";

interface ModalEditFoodProps {
  setIsOpen: () => void;
  editingFood: FoodData;
  isOpen: boolean;
  handleUpdateFood: (food: FoodData) => void;
}

const ModalEditFood = ({
  setIsOpen,
  editingFood,
  isOpen,
  handleUpdateFood,
}: ModalEditFoodProps) => {
  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = async (data: FoodData) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef.current as Ref<FormHandles> | undefined}
        onSubmit={handleSubmit}
        initialData={editingFood as FoodData}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
