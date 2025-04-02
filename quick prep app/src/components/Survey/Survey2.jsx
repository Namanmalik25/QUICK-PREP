import React from "react";


import Welcome2 from "../pictures/Welcome2.png";

const Survey2 = ({onNext,onPrev}) => {
  
 
  
  
  
  
  return (
    <>
     

      <div className="flex flex-col items-center justify-center  gap-y-3">
        <div>
          <img src={Welcome2} />
        </div>

        <div className="flex flex-col items-center  text-[#242424] font-[Open sans] font-[700] leading-[120%] text-[20px]">
          <div>
            {" "}
            Tell us your basic{" "}
            <span className="font-[Open sans] font-[700] text-[20px] leading-[110%]  text-[#2B97F9]">
              Schedule!
            </span>
          </div>
        </div>

        <div className="flex flex-col w-screen items-center   text-[#828282] ">
          <div className="flex  justify-between w-1/2  ">
            <div>Breakfast</div>
            <input type="time" className="time-input" />
          </div>
          <div className="flex justify-between w-1/2  ">
            <div> Lunch</div>
            <input type="time" className="time-input" />
          </div>
          <div className="flex justify-between w-1/2">
            <div>Dinner</div>
            <input type="time" className="time-input" />
          </div>
        </div>

        <div className="flex flex-col w-screen items-center pt-2 text-[#828282] ">
          <div className="flex  justify-between w-3/4  px-2">
            <div>School timings</div>
            <div className="flex gap-5">
              <input 
              />
              <input type="time" className="time-input" />
            </div>
          </div>
          <div className=" flex justify-between w-3/4 px-2   ">
            <div>Coaching timings</div>
            <div className="flex gap-5">
              <input type="time" className="time-input" />
              
              <input type="time" className="time-input" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Survey2;
