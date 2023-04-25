import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact";
import Signin from "./pages/auth/Signin";
import Register from "./pages/auth/Register";
import Home from "./pages/home";
import Product from "./pages/product";
import Products from "./pages/products";
import { Layout } from "./layouts/PublicLayout";
import { Profile } from "./pages/users/profile";
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
                path: "/products/:categoryTitle",
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
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);