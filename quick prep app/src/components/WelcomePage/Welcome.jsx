import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import hello from "../pictures/hello.png";
import Button from "../Button";
import Arrow_Fwd from "../pictures/Arrow_Fwd.png";
import Modal from "react-modal";

const Welcome = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleNext = () => {
    setOpen(false); 
    navigate("/swiper"); 
  };

  return (
    <>
      <div className="flex flex-col items-center p-5 justify-between h-full">
        <div>
          <img src={hello} alt="Welcome" />
        </div>

        <div className="flex flex-col p-16 items-center">
          <h1 className=" pb-6 font-[Open sans]  font-[700] text-[24px] leading-[110%]">
            Welcome to{" "}
            <span className="text-[#2B97F9]">Its-Time</span>
          </h1>
          <p className="text-[#828282] text-[14px] text-center">
            Lorem ipsum dolor sit amet consectetur. Neque nibh lectus pulvinar ipsum sollicitudin eget tortor justo. Turpis vitae massa risus mauris et enim.
          </p>
        </div>

        <div className="flex flex-col w-full">
          <Button
            onClick={handleOpen}
            backgroundColor="bg-[#0B2272]"
            hoverColor="hover:bg-[#4e68b7]"
          >
            <div className="flex items-center justify-center">
              Next
              <img src={Arrow_Fwd} className="h-[18px] w-[18px]" />
            </div>
          </Button>

     
          <Modal
            isOpen={open}
            className="bg-white p-6 rounded-lg w-[90%] max-w-md mx-auto shadow-lg"
            overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="flex flex-col justify-between p-8 rounded-[12px] bg-[#ffffff] gap-8">
              <div className="flex flex-col items-center font-[700] text-[24px] leading-[110%] text-[#242424]">
                <div>Let’s discuss about</div>
                <div>your routine!</div>
              </div>
              <div className="flex flex-col items-center text-[#828282] text-[14px] leading-[150%]">
                <div>Answer a few questions to help us</div>
                <div>personalize your time management experience.</div>
              </div>

      
              <Button onClick={handleNext} backgroundColor="bg-[#0B2272]" hoverColor="hover:bg-[#4e68b7]">
                <div className="flex items-center justify-center">
                  Next
                  <img src={Arrow_Fwd} className="h-[18px] w-[18px]" />
                </div>
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Welcome;
