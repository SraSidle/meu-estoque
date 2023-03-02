import Footer from "components/Footer";
import Header from "components/Header";
import { SMyStock } from "./style";

const MyStock = (): JSX.Element => {
  return (
    <>
      <Header />
    <SMyStock>
      <h1>Esse é o seu estoque</h1>
    </SMyStock>
      <Footer />
    </>
  );
};

export default MyStock;
