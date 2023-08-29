import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-[#201F1D]">
        <div className="pageWidth">
          <h1 className="text-[#EBEAEA] text-center pt-[30px] sm:pt-[100px] pb-[30px] sm:pb-[100px] text-[50px] font-normal Altesse_Std sm:text-[96px]">
            Evorythlng ln eno piaco
          </h1>
          <div className="sm:max-w-[1200px] m-auto">
            {/* row 1 */}
            <div className="grid gap-5 sm:gap-20 sm:grid-cols-2 grid-cols-1">
              {/* col 1 */}

              <div>
                <div className="flex items-center  gap-10">
                  <img
                    className=" max-w-[80px] sm:max-w-[300px]"
                    src="/images/Luxval_In-App Icon_Business.png"
                    alt=""
                  />
                  <div className="max-w-[450px]">
                    <h2 className="text-[#FFFFFF] text-[20px] Avenir sm:text-[30px]">
                      Business management
                    </h2>
                    <p className="text-[#E0DCDC] text-[14px] pt-3 sm:pt-3 sm:text-[20px]">
                      With our live dashboard, you can see your progress with
                      your services as well as your earnings on a daily, weekly,
                      and monthly basis.
                    </p>
                  </div>
                </div>
              </div>
              {/* col 2 */}
              <div>
                <div className="flex items-center gap-10">
                  <img
                    className=" max-w-[80px] sm:max-w-[300px]"
                    src="/images/Luxval_In-App Icon_Advertise Services.png"
                    alt=""
                  />
                  <div className="max-w-[350px]">
                    <h2 className="text-[#FFFFFF] text-[20px] Avenir sm:text-[30px]">
                      Advertise services
                    </h2>
                    <p className="text-[#E0DCDC] text-[14px] pt-3 sm:pt-3 sm:text-[20px]">
                      As a service provider you have full control of your
                      services and offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* row 2 */}
            <div className="grid gap-5 sm:gap-20 sm:grid-cols-2 mt-5 sm:mt-10 grid-cols-1">
              {/* col 1 */}

              <div>
                <div className="flex items-center gap-10">
                  <img
                    className=" max-w-[80px] sm:max-w-[300px]"
                    src="/images/Luxval_In-App Icon_Bookings.png"
                    alt=""
                  />
                  <div className="max-w-[450px]">
                    <h2 className="text-[#FFFFFF] text-[20px] Avenir sm:text-[30px]">
                      Bookings management
                    </h2>
                    <p className="text-[#E0DCDC] text-[14px] pt-3 sm:pt-3 sm:text-[20px]">
                      With our scheduling system, you don't have to contact your
                      customers directly every time they book you, making your
                      bookings hassle-free.
                    </p>
                  </div>
                </div>
              </div>
              {/* col 2 */}
              <div>
                <div className="flex items-center gap-10">
                  <img
                    className=" max-w-[80px] sm:max-w-[300px]"
                    src="/images/Luxval_In-App Icon_Customer Engagement.png"
                    alt=""
                  />
                  <div className="max-w-[350px]">
                    <h2 className="text-[#FFFFFF] text-[20px] Avenir sm:text-[30px]">
                      Customer engagement
                    </h2>
                    <p className="text-[#E0DCDC] text-[14px] pt-3 sm:pt-3 sm:text-[20px]">
                      In addition to reviewing you and your services, customers
                      can tip you, thereby attracting more customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* row 3 */}
            <div className="grid sm:pb-[150px]  gap-5 sm:gap-20 sm:grid-cols-2 mt-5 sm:mt-10 grid-cols-1">
              {/* col 1 */}

              <div>
                <div className="flex items-center gap-10">
                  <img
                    className=" max-w-[80px] sm:max-w-[200px]"
                    src="/images/Luxval_In-App Icon_Customer Base.png"
                    alt=""
                  />
                  <div className="max-w-[450px] sm:ml-[-20px]">
                    <h2 className="text-[#FFFFFF] text-[20px] Avenir sm:text-[30px]">
                      Grow customer base
                    </h2>
                    <p className="text-[#E0DCDC] text-[14px] pt-3 sm:pt-3 sm:text-[20px]">
                      Safe and secure transactions are in place to prevent loss
                      of funds (cancellation policy also for your protection).
                    </p>
                  </div>
                </div>
              </div>
              {/* col 2 */}
              <div>
                <div className="flex items-center gap-10">
                  <img
                    className=" max-w-[80px] sm:max-w-[300px]"
                    src="/images/Luxval_In-App Icon_Bulk Bookings.png"
                    alt=""
                  />
                  <div className="max-w-[350px] ">
                    <h2 className="text-[#FFFFFF] text-[20px] Avenir sm:text-[30px]">
                      Bulk Bookings
                    </h2>
                    <p className="text-[#E0DCDC] text-[14px] pt-3 sm:pt-3 sm:text-[20px]">
                      Additionally, we can receive bulk work from customers and
                      businesses with large fleets of cars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
