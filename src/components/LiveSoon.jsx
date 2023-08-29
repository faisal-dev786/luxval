import React from "react";

const LiveSoon = () => {
  return (
    <div>
      <div className="livesec pt-10 sm:pt-[250px] sm:pb-[50px] relative ">
        <img
          className="circle mix-blend top-[60px] absolute"
          src="/images/bubbles-png-11407 7.png"
          alt=""
        />
        <img
          className="circle mix-blend top-[65px] right-[310px] absolute"
          src="/images/bubbles-png-11407 9 (1).png"
          alt=""
        />
        <div className="pageWidth">
          <h1 className=" text-center Avenir font-normal text-[26px] sm:text-[34px] text-white ">
            Live Soon!
          </h1>
          <img
            className="circle absolute right-[260px] top-[30px] "
            src="/images/Vector 4.png"
            alt=""
          />

          <div className="box flex flex-wrap items-center justify-center ">
            <img className="" src="/images/appStore.png" alt="" />
            <img
              className=" mt-[-50px] sm:mt-0 sm:ml-[-60px]"
              src="/images/googlePlay.png"
              alt=""
            />
          </div>
        </div>
            
      </div>
    </div>
  );
};

export default LiveSoon;
