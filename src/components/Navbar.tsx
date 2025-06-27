import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import Projet from "../pages/Projets";
import Autres from "../pages/Autres";

const Navbar = () => {
    return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/autres" element={<Autres />}/>
          </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default Navbar;
