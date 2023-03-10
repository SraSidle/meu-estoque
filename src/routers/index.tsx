import Home from "pages/Home";
import Login from "pages/Login";
import MyStock from "pages/MyStock";
import NotFound from "pages/NotFound";
import PrivacyPolicy from "pages/PrivacyPolicy";
import ProductEntry from "pages/ProductEntry";
import TermsOfUse from "pages/TermsOfUse";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/estoque-do-usuario/id" element={<MyStock />}/>
            <Route path="/entrada-de-mercadorias" element={<ProductEntry />}/>
            <Route path="/termos-de-uso" element={<TermsOfUse />}/>
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />}/>
        </Routes>
    )
}

export default Router;