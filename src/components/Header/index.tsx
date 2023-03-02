import { SHeader} from "./style";
import Menu from "components/Menu";

const Header = (): JSX.Element => {
  return (
    <SHeader>
      <Menu />
        <h1>Meu Estoque</h1>
    </SHeader>
  );
};

export default Header;
