import React from "react";
import image1 from "../Home/Myimage.jpg";
import "./Logo.css"

const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <img
        src={image1}
        alt="Profile"
        className="w-72 h-72 md:w-[380px] md:h-[380px] rounded-full object-cover shadow-2xl animate-floating"
      />
    </div>
  );
};

export default Logo;
