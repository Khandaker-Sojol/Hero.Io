import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <LoadingSpinner></LoadingSpinner>}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Root;
