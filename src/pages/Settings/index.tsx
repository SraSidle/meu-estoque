import Footer from "components/Footer";
import Header from "components/Header";
import { SSettings } from "./style";

const Settings = (): JSX.Element => {
  return (
    <>
      <Header />
      <SSettings>
        <h1>Eu sou a página de configurações</h1>
      </SSettings>
      <Footer />
    </>
  );
};

export default Settings;
