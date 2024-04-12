import React from 'react';
import { Movie } from "@/utils/types/movie"
import Link from 'next/link';

const CardMovie = ({ movie }: { movie: Movie | any }) => {
    const { _id, title, thumnail, trailer, director, category_id, premiere, time, language_id, rated, description, createdAt, updatedAt } = movie;
    return (
        <div className="col-span-1 bg-gray-800/10 rounded-2xl p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className=" p-4">
                <img src={thumnail} alt={title} className="w-full h-96 object-cover rounded-2xl" />
                <h2 className="text-xl font-bold text-white mt-4 h-[50px]">{title}</h2>
                <p className="text-sm text-white">Thể Loại : {category_id.name}</p>
                <p className="text-sm text-white">Thời lượng : {time}</p>
                <p className="text-sm text-white">Khởi chiếu : {premiere}</p>
            </div>
            <div className="max-w-[200px] items-center justify-center flex rounded-full mx-auto  p-[1px] shadow-lg">
                <Link href={`/showtime/${_id}`}>
                    <button className="flex-1 font-bold md:text-xl lg:text-sm bg- px-6 py-2 rounded-full">
                        Mua vé
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default CardMovie;