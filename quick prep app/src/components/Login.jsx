import React from "react";
import SwiperComponent from "./Swiper";
import Button from "./Button";
import Google from "../components/pictures/Google.png";
import Apple from "../components/pictures/Apple.png";

const Login = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center  pt-5 font-[Open Sans] font-[700] leading-[110%] text-[32px] text-[#242424]">
        <div>It's time to</div>
        <div>Get Started!</div>
      </div>

      <div className="pt-5">
        <SwiperComponent />
      </div>

      <div className="flex flex-col p-5 gap-5 justify-center">
        <Button backgroundColor="bg-[#0B2272]" hoverColor="hover:bg-[#1A3BA0]">
          Continue with Phone number
        </Button>

        <div className="flex items-center justify-center gap-4">
          <div className=" w-full border-[1px]  border-[#BDBDBD]"></div>
          <div className="font-[Open Sans] font-[300] leading-[110%] text-[16px] text-[#242424]">
            OR
          </div>
          <div className="w-full border-[1px] border-[#BDBDBD]"></div>
        </div>

        <Button
          Image={Google}
          backgroundColor="bg-[#919CC3]"
          hoverColor="hover:bg-[#4e68b7]"
        >
          Sign with Google
        </Button>

        <Button
          Image={Apple}
          backgroundColor="bg-[#919CC3]"
          hoverColor="hover:bg-[#4e68b7]"
        >
          Sign with Apple
        </Button>
      </div>
      <div className=" flex justify-center  gap-1 p-5 items-center font-[manrope] font-[400] leading-[110%]  text-[14px]">
        By signing in, you agree to our
        <a className="text-blue-600 ">terms</a> and
        <a className="text-blue-600">privacy policy</a>
      </div>
    </>
  );
};

export default Login;
