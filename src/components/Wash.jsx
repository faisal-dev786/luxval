import React from "react";

const Wash = () => {
  return (
    <>
      <div className="washsec relative py-[40px] sm:pt-[180px] sm:pb-[250px]  ">
        <img
          className=" circle absolute left-[65px] top-[125px] "
          src="/images/line.png"
          alt=""
        />
        <img
          className=" circle mix-blend absolute right-1 top-[210px] "
          src="/images/boll9.png"
          alt=""
        />
        <div className="pagewidth">
          <div className="box flex justify-center ">
            <img
              className="rounded-xl filter max-w-[300px]  sm:max-w-[750px] "
              src="/images/car.jpg"
              alt=""
            />
          </div>
          <img
            className=" circle mix-blend absolute top-[-105px] z-[-1] max-w-[1200px] "
            src="/images/lux.png"
            alt=""
          />
        </div>
            
      </div>
    </>
  );
};

export default Wash;
