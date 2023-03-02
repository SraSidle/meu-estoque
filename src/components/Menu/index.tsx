import { useState } from "react";
import { SMenu, SHamburguer, SList } from "./style";
import sair from "assets/icons/sair.png";
import home from "assets/icons/silhueta-de-icone-de-casa.png";
import grafico from "assets/icons/grafico-de-crescimento.png";
import acordo from "assets/icons/marca-de-verificacao.png";
import contrato from "assets/icons/apolice-de-seguro.png";
import entradas from "assets/icons/seta-direita.png";
import NavigateMenu from "components/NavigateMenu";

const Menu = (): JSX.Element => {
  const [active, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <SMenu>
      <div
        onClick={toggleMode}
        className={active ? `icon icon-active` : `icon`}
      >
        <SHamburguer className="hamburguer hamburguer-icon"></SHamburguer>
      </div>
      <div className={active ? `menu menu-open` : `menu menu-close`}>
        <SList className="list">
          <ul className="list-Items">
            <NavigateMenu text="Início" page="/" image={home} />
            <NavigateMenu
              text="Estoque Atual"
              page="/estoque-do-usuario/id"
              image={grafico}
            />
            <NavigateMenu
              text="Entradas"
              page="/entrada-de-mercadorias"
              image={entradas}
            />
            <NavigateMenu text="Logout" page="/login" image={sair} />
            <div className="line"></div>
            <NavigateMenu
              text="Termos de Uso"
              page="/termos-de-uso"
              image={contrato}
            />
            <NavigateMenu
              text="Política de privacidade"
              page="/politica-de-privacidade"
              image={acordo}
            />
          </ul>
        </SList>
      </div>
    </SMenu>
  );
};

export default Menu;
