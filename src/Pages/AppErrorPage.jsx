import React from "react";
import { useNavigate } from "react-router";
import appErrorImg from "/images/App-Error.png";

const AppErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 gap-5 md:p-20">
      <img src={appErrorImg} alt="" />
      <h1 className="text-[#001931] font-semibold text-5xl">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382] text-xl">
        The App you are requesting is not found on our system. please try
        another apps
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

export default AppErrorPage;
