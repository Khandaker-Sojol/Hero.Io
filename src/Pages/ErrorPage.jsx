import React from "react";
import errorImg from "/images/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-5">
      <img src={errorImg} alt="" />
      <h1 className="text-[#001931] font-semibold text-5xl">
        Oops, page not found!
      </h1>
      <p className="text-[#627382] text-xl">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFF] px-6 py-3 cursor-pointer"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
