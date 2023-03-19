import Footer from "components/Footer";
import Header from "components/Header";
import Product from "components/Product";
import { SMyStock } from "./style";

const MyStock = (): JSX.Element => {

  return (
    <>
      <Header />
      <SMyStock>
        <Product />
      </SMyStock>
      <Footer />
    </>
  );
};

export default MyStock;
