import { formatNumberToVND, formatTime } from "@/utils/formats";
import { Seat } from "@/utils/types/seat";
import { Ticket } from "@/utils/types/ticket";
import Link from "next/link";

const ItemTicket: React.FC<{ ticket: Ticket | any }> = ({ ticket }) => {
    const { seat_id, show_timeId, show_timeIndex, price , _id, status} = ticket;
    return (
        <>
            <div className="backdrop-blur-md bg-gray-100/10 p-4 w-full rounded-2xl col-span-2">
                <div className="flex items-start ">
                    <img src={show_timeId?.movie_id.thumnail} alt={show_timeId.movie_id.title} className="w-[120px] h-[180px] rounded-xl" />
                    <div className="mx-4">
                        <h2 className="my-2">{show_timeId?.movie_id.title}</h2>
                        <div className="flex items-start justify-start my-2">
                            <p className="font-bold w-[40%]">Rạp </p>
                            <span className=" ">{show_timeId?.cinema_id.name}</span>
                        </div>
                        <div className="flex items-start justify-start my-2">
                            <p className="font-bold w-[40%]">Suất chiếu </p>
                            <p className="">{show_timeId?.show_times[Number(show_timeIndex)]}</p>
                        </div>
                        <div className="flex items-start justify-start my-2">
                            <p className="font-bold w-[40%]">Phòng chiếu </p>
                            <p className="">{show_timeId?.room_id.room_name}</p>
                        </div>
                        <div className="flex flex-wrap items-start justify-start my-2">
                            <p className="font-bold w-[40%]">Ghế</p>
                            {seat_id?.map((seat: Seat, index: number) => {
                                return <p key={index} className="mx-2">{seat.name}</p>
                            })}
                        </div>
                        <div className="mt-4">
                            {status === 'active' ? (
                            <Link href={`/mytickets/${_id}`} className="border border-gray-500 px-4 py-2 rounded-lg">Sử dụng vé</Link>
                            ): (
                                <div className="border disabled cursor-not-allowed border-gray-500 px-4 py-2 rounded-lg w-fit">Đã sử dụng</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemTicket;
