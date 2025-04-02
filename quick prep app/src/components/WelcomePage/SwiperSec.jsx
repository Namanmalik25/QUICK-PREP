import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Survey1 from "../Survey/Survey1";
import Survey2 from "../Survey/Survey2";
import Survey3 from "../Survey/Survey3";
import { useState } from "react";
import Button from "../Button";
import Arrow_Fwd from "../pictures/Arrow_Fwd.png";
import Arrow_Back from "../pictures/Arrow_Back.png";
import {  useNavigate } from "react-router-dom"; 




export default function SwiperSec() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const navigate = useNavigate();

  const handleSlidePrev = () => {

   
    if (swiperInstance.activeIndex>=1) {
      swiperInstance.slidePrev();
    }
    else {

      navigate("/Welcome"); 
         
     }
  };

  
  
  


  return (
    <>
      <div>
        <button onClick={handleSlidePrev}
       
        className="p-4 cursor-pointer">
          <img src={Arrow_Back} />
        </button>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={setSwiperInstance}
          className="flex flex-col items-center h-[650px]"
        >
          <SwiperSlide>
            <Survey1 onNext={() => swiperInstance?.slideNext()}
                    
              />
          </SwiperSlide>

          <SwiperSlide>
            <Survey2 onNext={() => swiperInstance?.slideNext()} 
                      onPrev={()=> swiperInstance?.slidePrev()}
              />
          </SwiperSlide>

          <SwiperSlide>
            <Survey3 onPrev={()=> swiperInstance?.slidePrev()} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col px-14">
        <Button
          onClick={handleSlideNext}
          backgroundColor="bg-[#0B2272]"
          hoverColor="hover:bg-[#4e68b7]"
        >
          <div className="flex items-center justify-center">
            Next
            <img src={Arrow_Fwd} className="h-[18px] w-[18px]" />
          </div>
        </Button>
      </div>
    </>
  );
}
