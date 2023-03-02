import Footer from "components/Footer";
import Header from "components/Header";
import { SPrivacy } from "./style";

const PrivacyPolicy = (): JSX.Element => {
  return (
    <>
      <Header />
      <SPrivacy>
        <h1>Política de privacidade do Usuário</h1>
      </SPrivacy>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
