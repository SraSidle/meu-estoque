import { SFooter } from "./style";
import copyright from "assets/icons/copyright.png";

const Footer = (): JSX.Element => {
  return (
    <SFooter>
      <p>Copyright Meu Estoque 2023 Todos os Direitos Reservados</p>
      <img src={copyright} alt="ícone copyright"/>
    </SFooter>
  );
};

export default Footer;
