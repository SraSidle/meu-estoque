import AddProduct from "pages/AddProduct";
import Home from "pages/Home";
import Login from "pages/Login";
import MyStock from "pages/MyStock";
import NotFound from "pages/NotFound";
import PrivacyPolicy from "pages/PrivacyPolicy";
import ProductDetails from "pages/ProductDetails";
import ProductEntry from "pages/ProductEntry";
import Settings from "pages/Settings";
import TermsOfUse from "pages/TermsOfUse";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/adicionar-novo-produto" element={<AddProduct />} />
      <Route path="/estoque-do-usuario/id" element={<MyStock />} />
      <Route path="/saida-de-mercadorias" element={<ProductEntry />} />
      <Route path="/configuracoes-de-conta" element={<Settings />} />
      <Route path="/termos-de-uso" element={<TermsOfUse />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default Router;
