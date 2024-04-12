'use client';
import { addHoldTicket } from "@/redux/slices/ticketSclice";
import { AppDispatch } from "@/redux/store";
import { formatNumberToVND, formatTime } from "@/utils/formats";
import { Seat } from "@/utils/types/seat";
import { ShowTime } from "@/utils/types/showTime";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
const CardBooking: React.FC<ShowTime | any> = ({ showTime, index, listSelectedSeats }) => {
    const router = useRouter();
    const user = useSelector((state: any) => state.auth.user);
    const { cinema_id, movie_id, show_times, room_id, price } = showTime;
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const totalPrice = listSelectedSeats.reduce((total: number, seat: Seat) => {
            let priceMultiplier = 1;
            if (seat.type === 'vip') {
                priceMultiplier = 1.1;
            } else if (seat.type === 'couple') {
                priceMultiplier = 2.2;
            }
            const seatPrice = price * priceMultiplier;
            return total + seatPrice;
        }, 0);
        setTotalPrice(totalPrice);
    }, [listSelectedSeats]);
    const dispatch = useDispatch<AppDispatch>();
    const nextToPayment = async () => {
        // Assuming addHoldTicket is an async action creator that adds data to the database
        const heldTicket = await dispatch(addHoldTicket({ seat_id: listSelectedSeats, user_id: user.id, show_timeId: showTime._id, show_timeIndex: index, price: totalPrice }));
        const _idHeldTicket = heldTicket.payload;
        if(_idHeldTicket){
            router.push(`/booking/payment/${_idHeldTicket._id}`);
        }else {
           alert('Ghế bạn chọn đang được người khác thanh toán');
        }
    }
    return (
        <>
            {showTime.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="min-h-[200px] h-fit my-5 backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
                        <div className="grid grid-cols-8 gap-4 p-2">
                            <div className="col-span-2 flex items-start ">
                                <img src={movie_id.thumnail} alt={movie_id.title} className="w-[120px] h-[180px] rounded-xl" />
                                <div className="mx-4">
                                    <h2 className="my-2">{movie_id.title}</h2>
                                    <p className="text-sm my-2">{movie_id.rated}</p>
                                </div>
                            </div>
                            <div className="col-span-3 ">
                                <div className="flex items-start justify-start ">
                                    <p className="font-bold w-[20%]">Rạp </p>
                                    <span className=" ">{cinema_id.name}</span>
                                </div>
                                <div className="flex items-start justify-start ">
                                    <p className="font-bold w-[20%]">Suất chiếu </p>
                                    <p className="">{show_times[Number(index)]}</p>
                                </div>
                                <div className="flex items-start justify-start ">
                                    <p className="font-bold w-[20%]">Phòng chiếu </p>
                                    <p className="">{room_id.room_name}</p>
                                </div>
                                <div className="flex flex-wrap items-start justify-start ">
                                    <p className="font-bold w-[20%]">Ghế</p>
                                    {listSelectedSeats.map((seat: Seat, index: Number | any) => {
                                        return <p key={index} className="mx-2">{seat.name}</p>
                                    })}
                                </div>
                            </div>
                            <div className="col-span-2 ">
                                <div className="flex items-start justify-start ">
                                    <p className="font-bold w-[20%]">Giá vé</p>
                                    <span className=" ">{formatNumberToVND(totalPrice)}</span>
                                </div>
                                <div className="flex items-start justify-start ">
                                    <p className="font-bold w-[20%]">Combo</p>
                                    <span className=" ">{formatNumberToVND(0)}</span>
                                </div>
                                <div className="flex items-start justify-start ">
                                    <p className="font-bold w-[20%]">Tổng tiền</p>
                                    <span className="">{formatNumberToVND(totalPrice)}</span>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <div onClick={() => nextToPayment()} className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative">Tiếp Tục</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}
export default CardBooking;