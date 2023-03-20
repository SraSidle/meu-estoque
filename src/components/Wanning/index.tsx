import { mockProducts } from "helpers/data";
import { useState } from "react";
import { SWarnningModal } from "./style";

interface productIdProps {
  productId: number;
  valueModal: boolean;
}

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: string;
  department: string;
  description: string;
  adress: string;
}

const Warnning = ({ productId, valueModal }: productIdProps): JSX.Element => {
  const [products, setProducts] = useState<ProductProps[]>(mockProducts);
  const [modal, setModal] = useState<boolean>(valueModal);

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = mockProducts.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <SWarnningModal className={modal ? `` : `modal-close`}>
      <div className="container-warnning">
        <p>Tem certeza que deseja excluir esse produto do seu estoque?</p>
        <div className="button-container">
          <button
            onClick={(): void => {
              handleDeleteProduct(productId);
              setModal(false);
            }}
          >
            Sim
          </button>
          <button onClick={() => setModal(false)}>Não</button>
        </div>
      </div>
    </SWarnningModal>
  );
};

export default Warnning;
