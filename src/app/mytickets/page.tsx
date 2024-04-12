'use client';
import ListTicket from "@/components/list/listTicket";
import { getTicketByUserId } from "@/redux/slices/ticketSclice";
import { AppDispatch } from "@/redux/store";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Myticket = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userId = useSelector((state: any) => state.auth.userId);
    useEffect(() => {
        if(userId){
            dispatch(getTicketByUserId(userId));
        } 
    }, [dispatch, userId]);
    const tickets = useSelector((state: any) => state.ticket.tickets);

    
    return (
        <>
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
            <div>
                <ListTicket tickets={tickets} />
            </div>
        </div>
        </>
    )
}
export default Myticket;