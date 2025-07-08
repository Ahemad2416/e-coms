import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/blocks/Login";
import Register from "./pages/auth/blocks/Register";
import ForgetPassword from "./pages/auth/blocks/ForgetPassword";
import ResetPassword from "./pages/auth/blocks/ResetPassword";


export const router = createBrowserRouter([

    {
        path: "/login",
        element: <Login></Login>
    },

    {
        path: "/register",
        element: <Register></Register>
    },

    {
        path: "/login",
        element: <ForgetPassword></ForgetPassword>
    },

    {
        path: "/login",
        element: <ResetPassword></ResetPassword>
    },
]);