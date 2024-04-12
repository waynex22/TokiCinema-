"use client";
import React, { useEffect } from "react";
import { getMovies } from "@/redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { BannerCasousel, CarouselMovie, LoadingMovieCarousel, Spinner } from "@/components";
import { getBanner } from "@/redux/slices/bannerSlice";
import LoadingBannerCarousel from "@/components/loadingComponent/loadingBannerCarousel";
const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const banners = useSelector((state: any) => state.banner.banners);
  const movies = useSelector((state: any) => state.movie.movies);
  const movieStatus = useSelector((state: any) => state.movie.status);
  const bannerStatus = useSelector((state: any) => state.banner.status);
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getBanner());
  }, [dispatch]);
  return (
    <>
      <div className="flex items-center justify-center">
      <div className="my-10 animate-pulse">
      {bannerStatus === "loading" && <LoadingBannerCarousel />}
      </div>
      {bannerStatus === "succeeded" && (
        <div className="my-10">
          <BannerCasousel banners={banners} />
        </div>
      )}
      {bannerStatus === "failed" && <div>Failed to fetch movies</div>}
      </div>
      <div className="my-10 flex items-center justify-center w-[40%] mx-auto relative backdrop-blur-md bg-gray-100/10 rounded-md p-4">
        <div className="w-fit flex">
          <div className="flex items-center mx-2">
            <p className="font-bold text-lime-200 text-2xl">P</p>
            <p className="font-bold text-lime-300 text-2xl">h</p>
            <p className="font-bold text-teal-300 text-2xl">i</p>
            <p className="font-bold text-teal-500 text-2xl">m</p>
          </div>
          <div className="flex items-center mx-2">
            <p className="font-bold text-indigo-300 text-2xl">Đ</p>
            <p className="font-bold text-pink-300 text-2xl">a</p>
            <p className="font-bold text-pink-400 text-2xl">n</p>
            <p className="font-bold text-amber-500 text-2xl">g</p>
          </div>
          <div className="flex items-center mx-2">
            <p className="font-bold text-amber-400 text-2xl">C</p>
            <p className="font-bold text-orange-600 text-2xl">h</p>
            <p className="font-bold text-red-400 text-2xl">i</p>
            <p className="font-bold text-orange-300 text-2xl">ế</p>
            <p className="font-bold text-pink-500 text-2xl">u</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <div className="my-10">
      {movieStatus === "loading" && <LoadingMovieCarousel />}
      </div>
      {movieStatus === "succeeded" && (
        <div className="my-10">
          <CarouselMovie movies={movies} />
        </div>
      )}
      {movieStatus === "failed" && <div>Failed to fetch movies</div>}
      </div>
    </>
  );
}
export default Home;
