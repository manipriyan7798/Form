import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Signup/Signup";
import ProtectedRoutes from "./ProtectedRouter";
import Home from "../Components/Navbar/AfterLoginPage" // try to navigate by useAuth false

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/aftlogin" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Routers;