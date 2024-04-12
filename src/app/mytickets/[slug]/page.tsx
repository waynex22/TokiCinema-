'use client';
import QRCode from 'qrcode.react';
import { getTicketByUserId } from "@/redux/slices/ticketSclice";
import { AppDispatch } from "@/redux/store";
import { Seat } from "@/utils/types/seat";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatNumberToVND } from '@/utils/formats';

const DetailTicket = ({ params }: { params: any }) => {
    const { slug } = params;
    const dispatch = useDispatch<AppDispatch>();
    const userId = useSelector((state: any) => state.auth.userId);
    useEffect(() => {
        if (userId) {
            dispatch(getTicketByUserId(userId));
        }
    }, [dispatch, userId]);
    const tickets = useSelector((state: any) => state.ticket.tickets);
    const ticket = tickets?.find((ticket: any) => ticket._id === slug);
    if (!ticket) {
        return
    }
    const { seat_id, show_timeId, show_timeIndex, price, _id, status, combos } = ticket;
    return (
        <div className="my-10 container mx-auto">
            <div className="backdrop-blur-md bg-gray-100/10 p-4 w-full rounded-2xl flex items-center justify-center">
                <div className="w-fit  flex">
                    <div className="flex items-center mx-2">
                        <p className="font-bold text-lime-200 text-2xl">V</p>
                        <p className="font-bold text-lime-300 text-2xl">é</p>
                    </div>
                    <div className="flex items-center mx-2">
                        <p className="font-bold text-teal-300 text-2xl">c</p>
                        <p className="font-bold text-teal-500 text-2xl">ủ</p>
                        <p className="font-bold text-indigo-300 text-2xl">a</p>
                    </div>
                    <div className="flex items-center mx-2">
                        <p className="font-bold text-pink-300 text-2xl">b</p>
                        <p className="font-bold text-pink-400 text-2xl">ạ</p>
                        <p className="font-bold text-amber-500 text-2xl">n</p>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="backdrop-blur-md bg-gray-100/10 p-4 w-full rounded-2xl col-span-2">
                    <div className="w-full grid grid-cols-4 gap-2 ">
                        <div className="col-span-1 p-4 flex">
                            <img src={show_timeId?.movie_id.thumnail} alt="" className=" h-[500px] rounded-lg" />
                        </div>
                        <div className="col-span-2 p-4">
                            <div className="ml-6">
                                <h1 className="font-bold text-[18px]">{show_timeId?.movie_id.title}</h1>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Rạp </p>
                                    <span className=" ">{show_timeId?.cinema_id.name}</span>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Suất chiếu </p>
                                    <p className="">{show_timeId?.show_times[Number(show_timeIndex)]}</p>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Phòng chiếu </p>
                                    <p className="">{show_timeId?.room_id.room_name}</p>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Số vé </p>
                                    <p className="">{seat_id?.length > 10 ? `${seat_id?.length}` : `0${seat_id?.length}`}</p>
                                </div>
                                <div className="flex flex-wrap items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Ghế</p>
                                    {seat_id?.map((seat: Seat, index: number) => {
                                        return <p key={index} className="mx-2">{seat.name}</p>
                                    })}
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Phòng chiếu </p>
                                    <p className="">{show_timeId?.room_id.room_name}</p>
                                </div>
                                <div className="flex items-start justify-start my-2">
                                    <p className="font-bold w-[20%]">Tổng tiền </p>
                                    <p className="">{formatNumberToVND(price)}</p>
                                </div>
                                <div className="w-[40%] h-[1px] my-5 bg-gray-300"></div>
                                <div className="my-6">

                                    <p className="font-bold w-[20%]">Vật phẩm</p>
                                    {combos?.map((combo: any, index: number) => {
                                        return <div key={index}>
                                            <div className="flex items-start ">
                                                <div>

                                                    <img src={combo.combo_id.thumbnail} alt="" className="w-[100px] h-[100px]" />
                                                </div>
                                                <div className="ml-5">
                                                    <span className="font-bold">{combo.combo_id.name}</span>
                                                    <p className="">{combo.combo_id.description} </p>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className='ml-6'>
                                <p>Mã QR code ( Đưa mã này cho nhân viên để nhận vé và combo )</p>
                                <QRCode className='my-4' value={slug} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default DetailTicket;