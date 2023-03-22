import { useState } from "react";
import { SMenu, SHamburguer, SList } from "./style";
import home from "assets/icons/silhueta-de-icone-de-casa.png";
import graphic from "assets/icons/grafico-de-crescimento.png";
import entry from "assets/icons/seta-direita.png";
import settings from "assets/icons/configuracoes-cog.png";
import sair from "assets/icons/sair.png";
import agreement from "assets/icons/marca-de-verificacao.png";
import contract from "assets/icons/apolice-de-seguro.png";
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
              image={graphic}
            />
            <NavigateMenu
              text="Saídas"
              page="/saida-de-mercadorias"
              image={entry}
            />
            <NavigateMenu
              text="Configurações"
              page="/configuracoes-de-conta"
              image={settings}
            />
            <NavigateMenu text="Logout" page="/login" image={sair} />
            <div className="line"></div>
            <NavigateMenu
              text="Termos de Uso"
              page="/termos-de-uso"
              image={contract}
            />
            <NavigateMenu
              text="Política de privacidade"
              page="/politica-de-privacidade"
              image={agreement}
            />
          </ul>
        </SList>
      </div>
    </SMenu>
  );
};

export default Menu;
