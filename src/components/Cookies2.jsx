import React, { useState } from "react";

const Cookies2 = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(false);
  };

  return (
    <div className={`${active === false ? "hidden" : "block"}`}>
      <div className="cookies">
        {/* fixed bos */}
        <div className="bg-[#B6ADA6] z-50 rounded-xl max-w-[350px] fixed bottom-[10px] right-[10px] p-5">
          <div>
            <img
              className="max-w[200px] m-auto"
              src="/images/cookies.png"
              alt=""
            />
            <h3 className="text-[20px] pt-5 pb-3 text-[#FFFFFF] font-medium text-center">
              Our website uses cookies
            </h3>
            <p className="text-[16px] text-center text-[#FFFFFF] font-light">
              Our website uses cookies. By continuing, we assume your permission
              to deploy cookies as detailed in our Privacy Policy
            </p>
            <div className="mt-4 text-center">
              <button className={`gradient-btn `} onClick={handleClick}>
                <p className="bg-black py-[17px] rounded-full px-[30px]">
                  Accept Cookies
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies2;
