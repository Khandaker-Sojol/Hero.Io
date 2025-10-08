import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Root;
