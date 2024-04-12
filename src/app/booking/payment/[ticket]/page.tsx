'use client'
import CardHeldBooking from "@/components/card/cardHeldBooking";
import { deleteHeldTicket, getHeldTicketPolulateById } from "@/redux/slices/ticketSclice";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getComBoToki } from "@/redux/slices/comboTokiSlice";
import { ComboToki } from "@/components";

const Ticket = ({ params }: { params: any }) => {
    const router = useRouter();
    const heldTicketId = params.ticket;
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getHeldTicketPolulateById(heldTicketId));
        dispatch(getComBoToki());
    }, [dispatch]);
    const heldTicket = useSelector((state: any) => state.ticket.holdTicket);
    const comboToki = useSelector((state: any) => state.ComboToki.combos);
    const deleteTicket = () => {
        dispatch(deleteHeldTicket(heldTicketId));
        router.push(`/showtime/${heldTicket.show_timeId}`);
    }
    const deleteTime = new Date();
    deleteTime.setMinutes(deleteTime.getMinutes() + 3);
    const calculateRemainingTime = () => {
        const currentTime = new Date().getTime();
        return deleteTime.getTime() - currentTime;
    }
    const formatTime = (milliseconds: number) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(calculateRemainingTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (remainingTime <= 0) {
            deleteTicket();
        }
    }, [remainingTime, deleteTicket]);
    return (
        <div className="container mx-auto my-10">
            <div className="backdrop-blur-md bg-gray-100/10 p-4 w-full rounded-2xl flex items-center justify-center">
                <div className="flex items-center mx-2">
                    <p className="font-bold text-indigo-300 text-[30px]">B</p>
                    <p className="font-bold text-pink-300 text-[30px]">o</p>
                    <p className="font-bold text-pink-400 text-[30px]">o</p>
                    <p className="font-bold text-amber-500 text-[30px]">k</p>
                    <p className="font-bold text-amber-400 text-[30px]">i</p>
                    <p className="font-bold text-amber-200 text-[30px]">n</p>
                    <p className="font-bold text-orange-600 text-[30px]">g</p>
                </div>
            </div>
            <div className="my-2 backdrop-blur-0 mx-auto bg-gray-100/10 rounded-xl p-4 w-[20%]">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-md font-bold">Thời gian giữ ghế</p>
                    <span>{formatTime(remainingTime)}</span>
                </div>
            </div>
            <div className="my-5">
                <ComboToki props={{ comboToki }} />
            </div>
            <div className="my-5">
                <CardHeldBooking props={{ heldTicket }} />
            </div>
        </div>
    )

}
export default Ticket;