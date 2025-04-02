import React from "react";
import Arrow_Back from "../pictures/Arrow_Back.png";
import Welcome3 from "../pictures/Welcome3.png";
import { useState } from "react";




const Survey3 = ({onPrev}) => {

const [answers, setAnswers] = useState({
    
    nap : "",
    
  });

  const handleClick = (type, value) => {
    setAnswers({
        [type]: value,
    });

    console.log(`${type} answer: ${value}`);
  };




  return (
    <>
     
            

      <div className="flex flex-col items-center justify-center ">
        <div>
          <img src={Welcome3} className="" />
        </div>

        <div className="flex flex-row items-center gap-x-1  pt-2  text-[#242424] font-[Open sans] font-[700] leading-[120%] text-[20px]">
          Tell us your basic
          <span className="font-[Open sans] font-[700] text-[20px] leading-[110%]  text-[#2B97F9]">
           Schedule!
          </span>
        </div>

        <div className="flex flex-col items-center p-4 justify-center text-[#242424] font-[Open sans] font-[700] leading-[120%] text-[16px]">
          <div>Do you want to take power nap in</div>
          <div>afternoon ?</div>
        </div>

        <div className="flex flex-row space-x-28   "  >
          <button
            onClick={() => handleClick("nap","yes")}
            className={
              answers.nap === "yes" ? "text-blue-600" : "hover:text-blue-600"
            }
          >Yes
          </button>

          <button
            onClick={() => handleClick("nap", "no")}
            className={
              answers.nap === "no" ? "text-blue-600" : "hover:text-blue-600"
            }
          >No
          </button>

        </div>

      <div className="flex flex-col items-center  pt-8 justify-center text-[#242424] font-[Open sans] font-[700] leading-[120%] text-[16px] ">
        <div>What is your sleep Schedule ?</div>
      </div>
      <div className="space-x-12 pt-4">
              <input type="time" className="time-input" />
              <input type="time" className="time-input" />
            </div>
      </div>
    </>
  );
};

export default Survey3;
