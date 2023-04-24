import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Signin from "./pages/auth/Signin";
import Register from "./pages/auth/Register";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { Layout } from "./layouts/PublicLayout";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/à propos",
                element: <About />,
            },

            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/products/:id",
                element: <Products />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);