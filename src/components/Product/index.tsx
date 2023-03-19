import { mockProducts } from "helpers/data";
import { useState } from "react";
import { SContainer, SProduct, SProductContainer } from "./style";
import { useNavigate } from "react-router-dom";

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
        navigate("/adicionar-novo-produto")
      }}
      >Adicione um novo produto</button>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <SProductContainer>
      {filteredData.map((product) => (
        <SProduct key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={`imagem de ${product.name}`} />
          <p>R$<span>{` ${product.price}`}</span></p>
          <span className="more-information">Mais informações</span>
        </SProduct>
      ))}
      </SProductContainer>
    </SContainer>
  );
};

export default Product;
