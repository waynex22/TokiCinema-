import { formatDate, formatTime } from "@/utils/formats";
import { ShowTime } from "@/utils/types/showTime";
import Link from "next/link";
const CartShowTime = ({ showTime }: any) => {
    const { cinema_id, movie_id, show_date , show_times, room_id ,_id } = showTime;
    // console.log(room_id);
    
    return (
        <>
            <div className="min-h-[200px] h-fit my-5 backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
                <div className="grid grid-cols-9 gap-4 p-2">
                    <div className=" col-span-1 ">
                        <img src={movie_id.thumnail} alt={movie_id.title} className="w-[120px] h-[180px] rounded-xl" />
                    </div>
                    <div className="col-span-3 ">
                        <h2 className="font-bold my-3">{movie_id.title}</h2>
                        <p className="">{movie_id.time}</p>
                        <p className="my-3">{cinema_id.name}</p>
                        <div className="flex items-center justify-start my-3">
                        <p >{cinema_id.location}</p>
                        <p className="ml-3">{room_id.room_name}</p>
                        </div>
                        <h3 className="font-bold border border-white w-fit p-2 rounded-lg">{formatDate(show_date)}</h3>
                    </div>
                    <div className="col-span-3 grid grid-cols-2 gap-4">
                        {show_times.map((time: any, index: number) => (
                            <Link href={`/booking/tickets/${room_id._id}/${_id}/${index}`} key={index} className="flex items-start justify-center border w-fit h-fit cursor-pointer border-white px-4 py-2 rounded-xl">
                            <p className="mx-2">{time}</p>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default CartShowTime;