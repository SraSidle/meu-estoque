import FormAddProduct from "components/FormAddProduct";
import Header from "components/Header";
import { SAddProductContainer } from "./style";

const AddProduct = (): JSX.Element => {
  return (
    <>
      <Header />
      <SAddProductContainer>
      <h1>Adicione um novo produto aqui</h1>
      <FormAddProduct />
      </SAddProductContainer>
    </>
  );
};

export default AddProduct;
