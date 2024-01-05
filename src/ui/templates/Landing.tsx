"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import SwiperWrapper from "../atoms/SwiperWrapper";
import RouteButton from "../atoms/RouteButton";

const stocks = [
  { samsung: "삼성" },
  { sk: "SK" },
  { lg: "LG" },
  { posco: "포스코" },
  { hyundai: "현대" },
  { naver: "네이버" },
  { kia: "기아" },
  { ecopro: "에코프로" },
  { celltrion: "셀트리온" },
  { kakao: "카카오" },
  { kb: "KB" },
  { shinhan: "신한" },
  { hana: "하나" },
  { hmm: "HMM" },
];

const Landing = () => {
  return (
    <div className="text-left mt-[60px]">
      <p className="text-lg">지금 갖고 있는 내 주식</p>
      <p className="text-lg">이 기간 동안 샀다면 지금은 얼마일까?</p>
      <p className="text-base text-gray-400">
        종목과 기간, 매수 금액으로 수익률을 알려드려요
      </p>
      <div>
        <SwiperWrapper style={{ height: "20vh", marginTop: "4rem" }}>
          {stocks.map((stock) => (
            <SwiperSlide>
              <Image
                src={`/logo/${Object.keys(stock)}.svg`}
                fill
                alt={String(Object.keys(stock))}
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
      <RouteButton url="/stock" />
    </div>
  );
};

export default Landing;
