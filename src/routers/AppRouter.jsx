import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Details from "../pages/details/Details";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import { useAuthContext } from "../context/AuthContext";

const { Routes, Route, useLocation, useNavigate } = require("react-router-dom");

function AppRouter() {
  const location = useLocation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const {pathname} = location
    if (pathname === "/login" || pathname === "/register") {
      user && navigate(-1);
    }
  }, [navigate, user, location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
