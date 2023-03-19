import { SHomeContainer } from "./style";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SHomeContainer>
        <button
          onClick={(): void => {
            navigate("/adicionar-novo-produto");
          }}
        >
          Adicione um novo produto
        </button>
      </SHomeContainer>
      <Footer />
    </>
  );
};

export default Home;
