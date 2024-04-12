import { formatNumberToVND, formatTime } from "@/utils/formats";
import { Seat } from "@/utils/types/seat";
import Spinner from "../spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch } from "@/redux/store";
import { updateHeldTicket } from "@/redux/slices/ticketSclice";
import { useRouter } from "next/navigation"
const CardHeldBooking: React.FC<any> = ({ props }) => {
    const router = useRouter();
    const heldTicket = props.heldTicket;
    const dispatch = useDispatch<AppDispatch>();
    const [totalPriceCombos, setTotalPriceCombos] = useState<number>(0);
    const combosSelected = useSelector((state: any) => state.ComboToki.comboSlected);
    useEffect(() => {
        const totalPriceCombo = combosSelected.reduce((total: number, combo: any) => {
            return total + combo.quantity * combo.price;
        }, 0);
        setTotalPriceCombos(totalPriceCombo);
    }, [combosSelected])
    const totalTicketPrice = heldTicket.price + totalPriceCombos;
    if (heldTicket.length == 0) {
        return <Spinner />
    }
    const { cinema_id, movie_id, show_times, room_id } = heldTicket.show_timeId;
    const data = {
        combos: combosSelected
    }
    const nextToPayment = () => {
        if(props.successBookingTicket){
            return props.successBookingTicket();
        }
         dispatch(updateHeldTicket({ id: heldTicket._id, data: data }));
        router.push(`/booking/payment/${heldTicket._id}/infopayment`);
        
        
    }
    return (
        <>
            {heldTicket.length === 0 ? (
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
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Rạp </p>
                                    <span className=" ">{cinema_id.name}</span>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Suất chiếu </p>
                                    <p className="">{show_times[Number(heldTicket.show_timeIndex)]}</p>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Phòng chiếu </p>
                                    <p className="">{room_id.room_name}</p>
                                </div>
                                <div className="flex flex-wrap items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Ghế</p>
                                    {heldTicket.seat_id.map((seat: Seat, index: Number | any) => {
                                        return <p key={index} className="mx-2">{seat.name}</p>
                                    })}
                                </div>
                            </div>
                            <div className="col-span-2 ">
                                <div className="flex items-start justify-start my-2 ">
                                    <p className="font-bold w-[30%]">Giá vé</p>
                                    <span className=" ">{formatNumberToVND(heldTicket.price)}</span>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[30%]">Combo</p>
                                    <span className=" ">{props.totalPriceCombos ? formatNumberToVND(props.totalPriceCombos) : formatNumberToVND(totalPriceCombos) }</span>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[30%]">Tổng tiền</p>
                                    <span className="">{props.totalTicketPrice ? formatNumberToVND(props.totalTicketPrice) : formatNumberToVND(totalTicketPrice) }</span>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center my-2">
                                <div onClick={nextToPayment} className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative">Đặt Vé</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default CardHeldBooking;