
import { Outlet } from "react-router-dom";
import Footer from "../componemts/Layout/Footer/Footer";
import Navbar from "../componemts/Layout/Navbar/Navbar";
export const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  