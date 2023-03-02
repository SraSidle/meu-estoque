import { useNavigate } from "react-router-dom";
import { SNavigateMenu } from "./style";

type NavigateMenuProps = {
  text: string;
  page: string;
  image: string;
};

const NavigateMenu = ({
  text,
  page,
  image,
}: NavigateMenuProps): JSX.Element => {
  const navigate = useNavigate();

  function toBrowser() {
    navigate(page);
  }

  return (
    <SNavigateMenu onClick={toBrowser}>
      <img src={image} alt={`ícone de ${text}`} />
      <li>{text}</li>
    </SNavigateMenu>
  );
};

export default NavigateMenu;
