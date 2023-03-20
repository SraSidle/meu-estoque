import Header from "components/Header";
import { mockProducts } from "helpers/data";
import { useParams } from "react-router-dom";
import { SProductDetails, STextContainer } from "./style";
import { useState } from "react";
import Warnning from "components/Wanning";
import edit from "assets/icons/edit.png";
import deleteIcon from "assets/icons/bin.png";

const ProductDetails = (): JSX.Element => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const { productId } = useParams<{ productId: any }>();
  const product = mockProducts.find((p) => p.id === parseInt(productId));

  const changeModal = () => {
    setModalDelete(!modalDelete);
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <Header />
      {modalDelete && <Warnning productId={product.id} valueModal={modalDelete}/>}
      <SProductDetails>
        <h1>{product.name}</h1>
        <STextContainer>
          <div>
            <img className="product-image"
              alt={`imagem do produto: ${product.name}`}
              src={product.image}
            />
          </div>
          <div className="product-description">
            <p>{product.department}</p>
            <p>R$ {product.price}</p>
            <p>{product.adress}</p>
            <p>{product.description}</p>
            <button>
              <img src={edit} alt="ícone de um lápis" />
              Editar Produto
            </button>
            <button onClick={changeModal}>
              <img src={deleteIcon} alt="ícone de um lixeira" />
              Deletar Produto
            </button>
          </div>
        </STextContainer>
      </SProductDetails>
    </>
  );
};

export default ProductDetails;
