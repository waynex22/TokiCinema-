"use client"
import React, { useEffect, useState } from "react";
import ListBanner from "../list/listBanner";
import { Banner } from "@/utils/types/banner";

const BannerCarousel = (props: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden ">
        <div
          className="flex transition-transform duration-700 ease-out relative"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {props.banners.map((banner: Banner) => (
            <ListBanner key={banner._id} banner={banner} />
          ))}
        </div>
      </div>
      <button
        aria-label="slide backward"
        className="absolute z-30 top-[50%] left-[10%] focus:text-blue-300 cursor-pointer"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? props.banners.length - 1 : prevIndex - 1
          )
        }
      >
        <img src="https://static.vecteezy.com/system/resources/previews/020/998/055/non_2x/rounded-back-icon-element-free-png.png" className="w-6 h-6" alt="" />
      </button>
      <button
        aria-label="slide forward"
        className="absolute z-30 top-[50%] right-[10%] focus:outline-none focus:text-blue-300 "
        onClick={nextSlide}
      >
        <img src="https://static.vecteezy.com/system/resources/previews/020/998/055/non_2x/rounded-back-icon-element-free-png.png" className="w-6 h-6 rotate-180" alt="" />
      </button>
    </div>
  );
};

export default BannerCarousel;
