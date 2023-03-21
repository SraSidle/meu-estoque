import { mockProducts } from "helpers/data";
import { useEffect, useState } from "react";
import { SContainer, SProduct, SProductContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = mockProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
      <SProductContainer>
        {filteredData.map((product) => (
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
            </Link>{" "}
          </SProduct>
        ))}
      </SProductContainer>
    </SContainer>
  );
};

export default Product;
