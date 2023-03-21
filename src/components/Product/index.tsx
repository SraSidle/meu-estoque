import { SContainer, SProduct, SProductContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProducts } from "contexts/Products.Context";
import { useEffect, useState } from "react";

const Product = (): JSX.Element => {
  const { searchTerm, handleChange, products } = useProducts();
  const navigate = useNavigate();

  const [currentProducts, setCurrentProducts] = useState<
    JSX.Element[] | null
  >();

  const allProducts = (): JSX.Element[] => {
    return products.map((product) => (
      <SProduct key={product.id}>
        <h2>{product.name}</h2>
        <div className="container">
          <img src={product.image} alt={`imagem de ${product.name}`} />
          <div className="text-container">
            <p>
              R$<span>{` ${product.price}`}</span>
            </p>
            <p>
              Quantidade: <span>{product.amount}</span>
            </p>
          </div>
        </div>
        <Link className="more-information" to={`/products/${product.id}`}>
          Ver detalhes
        </Link>
      </SProduct>
    ));
  };

  useEffect(() => {
    setCurrentProducts(allProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <SContainer>
      <button
        onClick={(): void => {
          navigate("/adicionar-novo-produto");
        }}
      >
        Adicione um novo produto
      </button>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <SProductContainer>{currentProducts}</SProductContainer>
    </SContainer>
  );
};

export default Product;
