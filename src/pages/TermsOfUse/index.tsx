import Footer from "components/Footer";
import Header from "components/Header";
import { StermsUse } from "./style";

const TermsOfUse = (): JSX.Element => {
  return (
    <>
      <Header />
      <StermsUse>
        <h1>Termos de uso da aplicação</h1>
      </StermsUse>
      <Footer />
    </>
  );
};

export default TermsOfUse;
