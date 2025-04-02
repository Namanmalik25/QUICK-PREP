import React from "react";
import Button from "../Button";
import Modal from 'react-modal';
const Popup = () => {
  return (
    <>
   <Modal isOpen ={open}>
      <div className=" flex flex-col items-center  justify-between gap-5  rounded-[12px] bg-[#ffffff] ">
        <div className=" flex flex-col items-center w-[259px] h-[52px] mt-[40px]  font-[Open sans] font-[700] text-[24px] leading-[110%] text-[#242424] ">
          <div>Let’s discuss about</div>
          <div>your routine!</div>
        </div>
        <div className=" flex flex-col items-center  font-[Open sans] font-[400] text-[14px] leading-[150%] text-[#828282] ">
          <div>Answer few questions which will help us to </div>
          <div>personalise your time management experience</div>
        </div>

       <Button className></Button>
      </div>
      </Modal>
    </>
  );
};

export default Popup;
