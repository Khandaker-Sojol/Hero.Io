import React from "react";
import navLogo from "/images/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white/60 backdrop-blur-sm z-50">
      <h1 className="text-5xl font-bold flex items-center text-gray-600">
        L <img src={navLogo} className="w-22 h-auto animate-spin mb-4"></img>{" "}
        oading...
      </h1>
    </div>
  );
};

export default LoadingSpinner;
