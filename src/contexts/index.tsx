import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
