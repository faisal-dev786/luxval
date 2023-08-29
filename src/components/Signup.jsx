import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="signupsec pb-[48px] pt-[50px] bg-[#201F1D] ">
        <div className="pageWidth">
          <div className="box text-center max-w-[600px] m-auto ">
            <h1 className="Avenir text-white  font-normal text-[28px] md:text-[64px] text-center ">
              Pre-Signup up now.
            </h1>
            <h2 className="Avenir text-[#CBCBCB] font-normal text-[18px] md:text-[36px] mt-[10px] md:mt-[35px] text-center ">
              You’ll be the first to know when we release our app.
            </h2>

            <div className="inputbox mt-[30px] md:mt-[70px] bg-[#D1C8C1] rounded-[178px] flex items-center py-[20px] h-[60px] max-w-[490px] m-auto ">
              <button className="gradient-btn   text-white rounded-full ">
                <p className="bg-black py-[17px] px-[10px] sm:px-[30px] rounded-full">
                  Pre Sign Up
                </p>
              </button>
              <div className="field inputbox ml-3 sm:ml-[15px] md:ml-[25px] max-w-[220px] md:max-w-[286px] w-[100%] ">
                <input
                  className=" text-black inputbox outline-none max-w-[212px] w-[100%] "
                  placeholder="Enter your email address"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
            
      </div>
    </div>
  );
};

export default Signup;
