import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Products.Context";
import { AllProviderProps } from "types/interfaces/users";

const Providers = ({ children }: AllProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      <ProductsProvider>{children}</ProductsProvider>
    </BrowserRouter>
  );
};

export default Providers;
