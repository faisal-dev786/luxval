import React, { useState } from "react";
import { signUpBusiness } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmail from "validator/lib/isEmail";

const HeroBanner = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const doSignUpBusiness = async () => {
    if (!isEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }
    try {
      if (isEmail(email)) {
        setEmailError("");
        const response = await signUpBusiness(email);
        const data = response.data;
        console.log(data);
        toast.success("Presignup done successfully");
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="HeroBannerBg py-20">
        <div className="pageWidth">
          <img
            className="absolute max-w-[150px] sm:max-w-[600px] top-[16px] sm:top-[20px]"
            src="./images/logo.png"
            alt=""
          />
          <div className="max-w-[1200px] m-auto text-center">
            <h1 className="text-[24px] sm:text-[64px] Anvier font-normal sm:pt-[180px] text-[#FFFFFF] leading-[120.5%]">
              Sign up your business and manage your services on Luxval, free of
              charge.
            </h1>
            <p className="poppins text-[16px] sm:text-[24px] font-normal text-[#FFFFFF] py-5 sm:py-10">
              start with a free trial when you pre-sign up
            </p>
            {/* button */}
            <div className="inputbox mt-[30px] md:mt-[70px] bg-[#D1C8C1] rounded-[178px] flex items-center py-[20px] h-[60px] max-w-[490px] m-auto ">
              <button
                onClick={doSignUpBusiness}
                className="gradient-btn   text-white rounded-full "
              >
                <p className="bg-black py-[17px] px-[10px] sm:px-[30px] rounded-full">
                  Pre Sign Up
                </p>
              </button>
              <ToastContainer />
              <div className="field inputbox ml-3 sm:ml-[15px] md:ml-[25px] max-w-[220px] md:max-w-[286px] w-[100%] ">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className=" text-black inputbox outline-none max-w-[212px] w-[100%] "
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                />
              </div>
            </div>
            {emailError && (
              <p className="text-red-500  relative  ml-[130px]">{emailError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
