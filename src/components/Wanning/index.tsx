import { useProducts } from "contexts/Products.Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SWarnningModal } from "./style";

interface productIdProps {
  productId: number;
  valueModal: boolean;
}

const Warnning = ({ productId, valueModal }: productIdProps): JSX.Element => {
  const { handleDeleteProduct } = useProducts();
  const navigate = useNavigate();

  const [modal, setModal] = useState<boolean>(valueModal);

  return (
    <SWarnningModal className={modal ? `` : `modal-close`}>
      <div className="container-warnning">
        <p>Tem certeza que deseja excluir esse produto do seu estoque?</p>
        <div className="button-container">
          <button
            onClick={(): void => {
              handleDeleteProduct(productId);
              setModal(false);
              navigate("/estoque-do-usuario/id");
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
