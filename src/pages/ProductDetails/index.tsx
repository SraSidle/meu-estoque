import Header from "components/Header";
import Footer from "components/Footer";
import location from "assets/icons/location.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  SContainer,
  SProductDetails,
  SProductDetailsPage,
  STextContainer,
} from "./style";
import { useState } from "react";
import Warnning from "components/Wanning";
import edit from "assets/icons/edit.png";
import deleteIcon from "assets/icons/bin.png";
import { useProducts } from "contexts/Products.Context";
import FormUpdateProduct from "components/FormUpdateProduct";

const ProductDetails = (): JSX.Element => {
  const { products, updateModal, setUpdateModal } = useProducts();

  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const { productId } = useParams<{ productId: any }>();
  const product = products.find((p) => p.id === parseInt(productId));
  const navigate = useNavigate();

  const changeModal = () => {
    setModalDelete(!modalDelete);
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <SContainer>
      <Header />
      <button
        className="button-back"
        onClick={() => navigate("/estoque-do-usuario/id")}
      >
        Voltar
      </button>
      <SProductDetailsPage>
        {modalDelete && (
          <Warnning productId={product.id} valueModal={modalDelete} />
        )}
        {!updateModal && (
          <SProductDetails>
            <h1>{product.name}</h1>
            <STextContainer>
              <div>
                <img
                  className="product-image"
                  alt={`imagem do produto: ${product.name}`}
                  src={product.image}
                />
              </div>
              <div className="product-description">
                <p>
                  Departamento: <span>{product.department}</span>
                </p>
                <p>
                  Preço: <span>R$ {product.price} reais</span>
                </p>
                <p>
                  Quantidade em Estoque: <span>{product.amount} unidades</span>
                </p>
                <p>
                  Descrição: <span>{product.description}</span>
                </p>
                  <p>
                    Endereço: <span>{product.adress}</span>
                  </p>
                <div className="location">
                  <img src={location} alt="ícone de localização" />
                <p>
                  <span> A {product.distance} km de você</span>
                </p>
                </div>
                <div className="button-container">
                  <button
                    onClick={() => {
                      setUpdateModal(!updateModal);
                    }}
                  >
                    <img src={edit} alt="ícone de um lápis" />
                    Editar Produto
                  </button>
                  <button onClick={changeModal}>
                    <img src={deleteIcon} alt="ícone de um lixeira" />
                    Deletar Produto
                  </button>
                </div>
              </div>
            </STextContainer>
          </SProductDetails>
        )}
        {updateModal && <FormUpdateProduct product={product} />}
      </SProductDetailsPage>
      <Footer />
    </SContainer>
  );
};

export default ProductDetails;
