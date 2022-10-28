import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Input } from '../Input';
import { Modal } from '../Modal';

import { Form } from './styles';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}


interface ModalEditFoodProps {
  handleUpdateFood: (data: Food) => Promise<void>;
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: Food;

}


export function ModalEditFood({
  handleUpdateFood,
  setIsOpen,
  isOpen,
  editingFood,
}: ModalEditFoodProps) {
  const formRef = useRef(null);

  async function handleSubmit(data: Food) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
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
}