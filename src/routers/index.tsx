import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}

export default Router;