"use client";
import React , { useEffect } from "react";

import { getMovies } from "@/redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { LoadingListMovie} from "@/components";
import CardMovie from "../card/cardMovie";
// interface IProps {
//     movies: Movie[];
// }
const ListMovie = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: any) => state.movie.movies);
    const status = useSelector((state: any) => state.movie.status);
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);
    return (
        <>
            <div className="container mx-auto backdrop-blur-2xl bg-gray-100/10 rounded-2xl p-4 min-h-[500px] h-fit">
                <div className="grid grid-cols-4 gap-4 justify-center">
                    <div className="col-span-4 ml-5">
                    <div className="w-fit my-2 flex">
                            <div className="flex items-center">
                                <p className="font-bold text-lime-200 text-2xl">P</p>
                                <p className="font-bold text-lime-300 text-2xl">h</p>
                                <p className="font-bold text-teal-300 text-2xl">i</p>
                                <p className="font-bold text-teal-500 text-2xl">m</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-2xl">đ</p>
                                <p className="font-bold text-pink-300 text-2xl">a</p>
                                <p className="font-bold text-pink-400 text-2xl">n</p>
                                <p className="font-bold text-amber-500 text-2xl">g</p>
                            </div>
                            <div className="flex items-center">
                            <p className="font-bold text-amber-400 text-2xl">c</p>
                                <p className="font-bold text-orange-600 text-2xl">h</p>
                                <p className="font-bold text-amber-400 text-2xl">i</p>
                                <p className="font-bold text-orange-600 text-2xl">ế</p>
                                <p className="font-bold text-teal-300 text-2xl">u</p>
                            </div>
                        </div>
                    </div>
                    {status === "loading" && <LoadingListMovie />}
                    {status === "failed" && <div>Failed</div>}
                    {status === "succeeded" && (
                        movies.map((movie: any) => (
                            <div key={movie.id} className="col-span-1">
                                <CardMovie key={movie._id} movie={movie} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}
export default ListMovie;