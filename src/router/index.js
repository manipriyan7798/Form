import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Signup/Signup";
import ProtectedRoutes from "./ProtectedRouter";
import Apiapp from "../Components/Api/Apiapp";
import Home from "../Components/Navbar/AfterLoginPage"; // try to navigate by useAuth false
import ProductList from "../Components/ProductList/ProductList";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/api" element={<Apiapp />} /> */}
        <Route exact path="/" element={<ProductList />} />

        {/* <Route element={<ProtectedRoutes />}>
          <Route path="/aftlogin" element={<Home />} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default Routers;
