import React from "react";

const Announcement = ({ children }) => {
  return (
    <div>
      <div className="relative z-10 bg-black">
        <div className="pageWidth">
          <p className="text-[#FFFFFF] text-[16px] sm:text-[20px] font-normal Avenir text-center py-5">
            Looking to care for your car?{" "}
            <a href="">
              <span className="text-[#F8C562] underline">{children}</span>{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
