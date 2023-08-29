import React from "react";

const LuxvalUserHero = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className=" relative ">
          <img
            className="absolute sm:top-[-70px] left-[50%] overflow-hidden -translate-x-1/2 w-full"
            src="/images/light.png"
            alt=""
          />
        </div>
        <div>
          <div className="pageWidth">
            <img
              className="circle absolute max-w-[150px] sm:max-w-[600px] top-[16px] sm:top-[-50px]"
              src="./images/logo.png"
              alt=""
            />

            <div className="max-w-[1200px] m-auto text-center">
              <h1 className=" text-[40px] pt-[40px] Altesse_Std sm:text-[128px] Anvier font-normal  text-[#FFFFFF] leading-[120.5%] sm:pt-[65px]">
                Effetioss Car Cioanlng
              </h1>
              <div className="relative">
                <img
                  className="circle mix-blend absolute right-[-70px]"
                  src="/images/bubbles-png-11407 4.png"
                  alt=""
                />
              </div>

              <p className="relative Avenir tracking-[0.15em] text-[18px] sm:text-[42px] font-normal text-[#FFFFFF]">
                anytime, anywhere.
              </p>
              {/* button */}
              <div className="bg-black sm:mb-[40px] relative mt-[30px] md:mt-[70px]  rounded-[178px] flex items-center py-[20px] h-[60px] max-w-[490px] m-auto ">
                <button className="text-white rounded-full gradient-btn ">
                  <p className="bg-black py-[17px] px-[10px] sm:px-[30px] rounded-full">
                    Pre Sign Up
                  </p>
                </button>
                <div className="field bg-black ml-3 sm:ml-[15px] md:ml-[25px] max-w-[220px] md:max-w-[286px] w-[100%] ">
                  <input
                    className=" text-white bg-black outline-none max-w-[212px] w-[100%] "
                    placeholder="Enter your email address"
                    type="text"
                  />
                </div>
              </div>

              {/* car img */}
              <div className="relative">
                <img
                  className="circle top-[220px] left-[-90px] absolute mix-blend"
                  src="/images/bubble1.png"
                  alt=""
                />
                <img
                  className="circle top-[110px] absolute mix-blend"
                  src="/images/bubble2.png"
                  alt=""
                />
              </div>
              <img className="relative" src="/images/car.png " alt="" />
              <div className="relative">
                <div className="socialicons left-[-130px] bottom-[13px] absolute">
                  <a href="">
                    <img
                      className="pointer"
                      src="/images/facebook.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      className="pointer py-3"
                      src="/images/insta.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    {" "}
                    <img className="pointer " src="/images/tiktok.png" alt="" />
                  </a>
                  <a href="">
                    {" "}
                    <img
                      className="pointer py-3 "
                      src="/images/twitter.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      className="pointer "
                      src="/images/youtube.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* 3 cols of cell phone */}
              <div className="grid mt-[20px] sm:mt-[200px] grid-cols-1 gap-5 sm:grid-cols-3">
                <img
                  className="sm:scale-[0.8] max-w-[250px] m-auto sm:max-w-[600px] w-[100%]"
                  src="/images/Main Layers@2x 1 (1).png"
                  alt=""
                />
                <img
                  className="max-w-[250px] sm:max-w-[600px] m-auto w-[100%] "
                  src="/images/map@2x.png"
                  alt=""
                />
                <img
                  className="sm:scale-[0.8] max-w-[250px] m-auto sm:max-w-[600px] w-[100%]"
                  src="/images/booking@2x 1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxvalUserHero;
