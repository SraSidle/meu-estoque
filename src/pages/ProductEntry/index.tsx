import Footer from "components/Footer";
import Header from "components/Header";
import { SProductEntry } from "./style";

const ProductEntry = (): JSX.Element => {
  return (
    <>
      <Header />
      <SProductEntry>
        <h1>Essa é a página de entrada dos produtos</h1>
      </SProductEntry>
      <Footer />
    </>
  );
};

export default ProductEntry;
