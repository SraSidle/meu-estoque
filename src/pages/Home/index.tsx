import { SHomeContainer } from "./style";
import Header from "components/Header";
import Footer from "components/Footer";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
    <SHomeContainer>
      <h1>Essa é a página Home</h1>
    </SHomeContainer>
    <Footer />
    </>
  );
};

export default Home;
