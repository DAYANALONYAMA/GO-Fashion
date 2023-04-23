import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./componemts/Footer/Footer";
import Navbar from "./componemts/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "../src/app.scss";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
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
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },

//       {
//         path: "/à propos",
//         element: <About />,
//       },

//       {
//         path: "/contact",
//         element: <Contact />,
//       },

//       {
//         path: "/products",
//         element: <Products />,

//         children: [
//           {
//             path: ":id",
//             element: <Product />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
