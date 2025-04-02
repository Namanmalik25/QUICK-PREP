import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Pic from "../components/pictures/Pic.png";
import Target from "../components/pictures/Target.png";
import Stars from "../components/pictures/Stars.png";

export default function SwiperComponent() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}

      className="h-96"
      
    >
      <SwiperSlide>
        <div className="flex flex-col items-center ">
          <img src={Pic} className="mr-12" />
          <div className="flex flex-col items-center font-[Open Sans] font-[400] leading-[110%] text-[18px] text-[#242424]">
            <div>Manage your time efficiently</div>
            <div>so that you can unlock your true potential</div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center ">
          <img src={Target} alt="" />
            <div className="flex flex-col items-center  font-[Open Sans] font-[400] leading-[110%] text-[18px] text-[#242424]">
               <div>Meet all your goals and still have more! </div>
               <div>That’s the magic of</div>
            <div>efficient time-management</div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center ">
          <img src={Stars} alt="" />
          <div className="flex flex-col items-center font-[Open Sans] font-[400] leading-[110%] text-[18px] text-[#242424]">
            <div>Top the leaderboard, track your progress, </div>
            <div>analyse your productivity and more!</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
