import Home from "pages/Home";
import Login from "pages/Login";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}

export default Router;