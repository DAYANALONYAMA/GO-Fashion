
import { Outlet } from "react-router-dom";
import Footer from "../componemts/Footer/Footer";
import Navbar from ".:/componemts/Navbar/Navbar";
export const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  