// components/AuthLayout.jsx
import React from "react";
import bgImage from "../assets/Art (2).png";
import Container from "./Container";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <Container>
        <div className="flex w-[1170px] flex-col md:flex-row shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-6">
            {children}
          </div>
          <div className="hidden md:block w-full md:w-1/2">
            <img
              src={bgImage}
              alt="Login Visual"
              className="w-full h-full px-2 py-2 rounded-[3px] shadow-md object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
