import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";

const useAuth = () => {
    const user = { loggedIn: true }; //Default authentication true
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? (
        <>
            <NavBar />
            <Outlet />
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default ProtectedRoutes;