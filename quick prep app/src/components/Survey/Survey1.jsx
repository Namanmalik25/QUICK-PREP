import React, { useState } from "react";

import Welcome1 from "../pictures/Welcome1.png";

const Survey1 = ({onNext}) => {
  const [answer, setAnswer] = useState({
    school: "",
    coaching: "",
  });

   

  const handleClick = (type, value) => {
    setAnswer((prev) => ({
      ...prev,
      [type]: value

    }));
    
    console.log(`${type} has its answer as ${value}`)
  };

  return (
    <>
      

      <div className="flex flex-col items-center justify-center gap-6">
        <div>
          <img src={Welcome1} alt="Welcome" />
        </div>

        
        <div className="flex flex-col items-center md:flex-row md:gap-1 justify-center text-[#242424] font-[Open Sans] font-bold leading-[120%] text-[16px]">
          <div>Do you go to School or have taken Dummy?</div>
        </div>

        <div className="flex pl-6 gap-24">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name={"school"}
              value="yes"
              className="peer hidden"
              onChange={(e) => handleClick( "school" , e.target.value)}
            />
            <span className="peer-checked:text-blue-600">Yes</span>
          </label>

          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="school"
              value="no"
              className="peer hidden"
              onChange={(e) => handleClick("school", e.target.value)}
            />
            <span className="peer-checked:text-blue-600">No</span>
          </label>
        </div>

        
        <div className="flex flex-col items-center md:flex-row md:gap-1 justify-center text-[#242424] font-[Open Sans] font-bold leading-[120%] text-[16px] mt-6">
          <div>Have you ever joined a Coaching Institute?</div>
        </div>

        <div className="flex pl-6 gap-24">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="coaching"
              value="yes"
              className="peer hidden"
              onChange={(e) => handleClick("coaching", e.target.value)}
            />
            <span className="peer-checked:text-blue-600">Yes</span>
          </label>

          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="coaching"
              value="no"
              className="peer hidden"
              onChange={(e) => handleClick("coaching", e.target.value)}
            />
            <span className="peer-checked:text-blue-600">No</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Survey1;
