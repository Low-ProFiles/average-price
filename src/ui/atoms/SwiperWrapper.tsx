import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CSSProperties } from "react";

const SwiperWrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <Swiper
      style={style}
      loop
      speed={2000}
      slidesPerView={4}
      spaceBetween={20}
      centeredSlides
      roundLengths
      mousewheel
      grabCursor
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default SwiperWrapper;
