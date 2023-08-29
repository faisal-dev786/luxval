import React from "react";

const WhyLuxval = () => {
  return (
    <div>
      <div className="pageWidth">
        <h1 className="text-[30px] font-normal Academy text-[#FFFFFF] text-center py-10 sm:text-[64px]">
          WHY LUXVAL?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:pt-[100px]">
          <div className="  max-w-[420px] border p-[1px]  rounded-xl">
            <div className="bg-[#201F1D] relative rounded-xl p-3 sm:p-5">
              <img
                className="max-w-[100px] sm:max-w-[150px] py-5  m-auto"
                src="/images/Flexibilty & Convenience Icon HD.png"
                alt=""
              />
              <h3 className="text-[22px] sm:text-[28px] text-[#FFFFFF] text-center ">
                Flexibility & Convenience
              </h3>
              <p className="text-[#D9D5D5] py-5 text-[16px] sm:text-[20px] Avenir font-normal text-center">
                Luxval's main priority is to help everyday people take care of
                their vehicle effortlessly, anytime and anywhere.
              </p>
              <img
                className="absolute shadow bottom-[-179px] l-0"
                src="/images/IMG_1221 1.png"
                alt=""
              />
            </div>
          </div>
          {/* card 2 */}
          <div className=" max-w-[415px] border p-[1px]  rounded-xl">
            <div className="bg-[#201F1D] relative rounded-xl p-3 sm:p-5">
              <img
                className="max-w-[100px] sm:max-w-[150px] py-5  m-auto"
                src="/images/True Proffessionals Icon HD.png"
                alt=""
              />
              <h3 className="text-[22px] sm:text-[28px] text-[#FFFFFF] text-center ">
                True Professional's
              </h3>
              <p className="text-[#D9D5D5] py-5 text-[16px] sm:text-[20px] Avenir font-normal text-center">
                With Luxval you have the ability to receive a trust worthy
                service done by true professionals on your vehicle.
              </p>
              <img
                className="absolute shadow bottom-[-179px] l-0"
                src="/images/IMG_1221 1.png"
                alt=""
              />
            </div>
          </div>
          {/* card 3 */}
          <div className=" max-w-[415px] border p-[1px]  rounded-xl">
            <div className="bg-[#201F1D] relative rounded-xl p-3 sm:p-5">
              <img
                className="max-w-[100px] sm:max-w-[150px] py-5  m-auto"
                src="/images/Environmentally Friendly Icon HD@2x.png"
                alt=""
              />
              <h3 className="text-[22px] sm:text-[28px] text-[#FFFFFF] text-center ">
                Environmentally Friendly
              </h3>
              <p className="text-[#D9D5D5] py-5 text-[16px] sm:text-[20px] Avenir font-normal text-center">
                Mobile Valeter’s provide environmentally friendly services by
                using less water and less chemicals than average car wash.
              </p>
              <img
                className="absolute shadow bottom-[-179px] l-0"
                src="/images/IMG_1221 1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLuxval;
