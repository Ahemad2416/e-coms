import { createBrowserRouter } from "react-router-dom";
import {Login} from "./pages/auth";
import {Register} from "./pages/auth";
import {ForgetPassword} from "./pages/auth";
import {ResetPassword} from "./pages/auth";


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