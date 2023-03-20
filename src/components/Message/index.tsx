import { SMessage, SMessageContainer } from "./style";
import notice from "assets/icons/exclamation.png";

interface messageProps {
  message: string;
}

const Message = ({ message }: messageProps): JSX.Element => {
  return (
    <SMessage>
    <SMessageContainer>
      <img alt="ícone de aviso" src={notice}/>
      <p>{message}</p>
    </SMessageContainer>
    </SMessage>
  );
};

export default Message;
