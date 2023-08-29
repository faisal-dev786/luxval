import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footersec py-[50px] bg-[#201F1D] ">
        <div className="pageWidth">
          <div className="box grid grid-cols-1 md:grid-cols-[45%30%20%] gap-5 ">
            <div className="info">
              <h3 className="Avenir font-normal text-[24px] text-white ">
                Contact us
              </h3>
              <p className="Avenir mt-[10px] font-light text-[20px] text-white leading-[38px] max-w-[450px]  ">
                Office Address: 71-73 Manchester Buildings, Hyde Road,
                Manchester, M12 6BH <br />
                Email: Info@luxval.co.uk <br />
                Contact: 0871 875 0708
              </p>
            </div>
            <div className="icons">
              <h3 className="Avenir font-normal text-[24px] text-white ">
                Follow us
              </h3>
              <div className="socialicons mt-[15px] flex items-center ">
                <a href="">
                  {" "}
                  <img src="/images/facebook.png" alt="" />
                </a>
                <a href="">
                  {" "}
                  <img className=" ml-[15px] " src="/images/insta.png" alt="" />
                </a>
                <a href="">
                  {" "}
                  <img
                    className=" ml-[15px] "
                    src="/images/tiktok.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className=" ml-[15px] "
                    src="/images/twitter.png"
                    alt=""
                  />
                </a>
                <a href="">
                  {" "}
                  <img
                    className=" ml-[15px] "
                    src="/images/youtube.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="logo">
              <img className=" mt-[-30px] " src="/images/logo.png" alt="" />
            </div>
          </div>
          <div className="box2 sm:mt-[70px] flex-col md:flex-row flex items-center justify-center ">
            <h5 className="Avenir font-normal text-[16px] text-white ">
              Copyright@ Luxval 2023. All rights reserved.
            </h5>
            <h5 className="Avenir mx-[35px] font-normal text-[16px] text-white ">
              Terms & Conditions
            </h5>
            <h5 className="Avenir font-normal text-[16px] text-white ">
              Privacy & Policy
            </h5>
          </div>
        </div>
            
      </div>
    </div>
  );
};

export default Footer;
