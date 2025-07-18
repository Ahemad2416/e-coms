import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/auth";
import { Register } from "./pages/auth";
import { ForgetPassword } from "./pages/auth";
import { ResetPassword } from "./pages/auth";
import RouterLayout from "./RouterLayout";
import ProductCarts from "./pages/products/list/common/ProductCarts";


export const router = createBrowserRouter([

    {
        path: "/auth",
        element: <RouterLayout />,

        children: [

            { path: "login", element: <Login></Login> },

            { path: "register", element: <Register></Register> },

            { path: "forget", element: <ForgetPassword></ForgetPassword> },

            { path: "reset", element: <ResetPassword></ResetPassword> },

        ]
    },

    {
        path:"product/list",
        element:<ProductCarts></ProductCarts>
    }
]);