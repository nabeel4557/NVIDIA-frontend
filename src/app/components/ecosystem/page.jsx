import React from 'react'

function Ecosystem() {
  return (
      <div className="w-full bg-[#fff] py-[75px] ">
            <div className="w-full">
                <h6 className="text-[20px] font-bold text-[#1A1A1A] text-center">
                    Resources
                </h6>
                <h2 className="text-[36px] font-bold text-[#000] text-center mt-[20px]">
                    Take Your Enterprise AI Farther, Faster
                </h2>
                <p className="text-[15px] text-[#1A1A1A] text-center mt-[15px]">
                    Join leading partners to develop your AI applications with
                    models, toolkits, vector databases, frameworks, and
                    infrastructure from our ecosystem.
              </p>
              
          </div>
          <div className='w-full  mt-[10px]'>
                  <div className='w-[100%] h-[120px] '>
                      <img className="w-full h-full object-cover" src='images/img10.png' alt='logos'/>
                  </div>

                  <div className='w-[full] h-[120px]'>
                      <img className="w-full h-full object-cover" src='images/img11.png' alt='logos'/>
                  </div>
              </div>

      </div>
  );
}

export default Ecosystem;