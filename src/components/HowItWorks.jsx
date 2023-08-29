import React from 'react';

const HowItWorks = () => {
  return (
    <div>
      <div className='bg-[#201F1D]'>
        <div className='pageWidth'>
          <h1 className='Altesse_Std text-center pt-10 pb-10 sm:pb-16 text-[#EBEAEA] text-[60px] sm:text-[96px] font-normal'>
            New lt werks
          </h1>
          <div className='grid grid-cols-1 gap-10 pb-10 sm:gap-20 sm:grid-cols-3 '>
            {/* screen 1 */}
            <div>
              <img
                className=' sm:m-0 m-auto max-w-[250px] sm:max-w-[600px] w-[100%]'
                src='/images/b1@2x.png'
                alt=''
              />
              <div className='max-w-[300px] mt-10  mx-auto'>
                <img
                  className='sm:pt-5 mx-auto max-w-[250px] '
                  src='/images/Step 1 - Icon HD.png'
                  alt=''
                />
                <h2 className='text-[#FFFFFF] pt-5 sm:pt-10 pb-3 sm:pb-5 text-center text-[26px] sm:text-[32px] font-medium Avenir'>
                  Create an account
                </h2>
                <p className='text-[#D9D5D5] text-center text-[22px] sm:text-[28px] font-normal Avenir'>
                  Create your new account and enter your personal details.
                </p>
              </div>
            </div>
            {/* screen 2 */}
            <div>
              <img
                className=' sm:m-0 m-auto max-w-[250px] sm:max-w-[600px] w-[100%]'
                src='/images/b2@2x.png'
                alt=''
              />
              <div className='max-w-[300px] mt-10  sm:pt-0   mx-auto'>
                <img
                  className='mx-auto sm:pt-5'
                  src='/images/Step 2 - Icon HD.png'
                  alt=''
                />
                <h2 className='text-[#FFFFFF] pt-5 sm:pt-10 pb-3 sm:pb-5 text-center text-[26px] sm:text-[32px] font-medium Avenir'>
                  Create an account
                </h2>
                <p className='text-[#D9D5D5] text-center text-[22px] sm:text-[28px] font-normal Avenir'>
                  Create your new account and enter your personal details.
                </p>
              </div>
            </div>

            {/* screen 3 */}
            <div>
              <img
                className=' sm:m-0 m-auto max-w-[250px] sm:max-w-[600px] w-[100%]'
                src='/images/b3@2x.png'
                alt=''
              />

              <div className='max-w-[300px]  mt-10 sm:mt-10   mx-auto'>
                <img
                  className='mx-auto sm:pt-5'
                  src='/images/Step 3 - Icon HD.png'
                  alt=''
                />
                <h2 className='text-[#FFFFFF] pt-5 sm:pt-10 pb-3 sm:pb-5 text-center text-[26px] sm:text-[32px] font-medium Avenir'>
                  Create an account
                </h2>
                <p className='text-[#D9D5D5] text-center text-[22px] sm:text-[28px] font-normal Avenir'>
                  Create your new account and enter your personal details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
