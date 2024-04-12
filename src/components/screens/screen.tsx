'use client'
import { getScreenById } from "@/redux/slices/roomSlice";
import { checkSeat, getSeatsByIdRoom } from "@/redux/slices/seatSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SeatItem from "../item/seatItem";
import { Seat } from "@/utils/types/seat";
import { ScreenView } from "@/components";

const Screen = ({ id, setListSelectedSeats, listSelectedSeats, showtime ,indexShowTimes }: { id: any; setListSelectedSeats: any, listSelectedSeats: any , showtime: String, indexShowTimes: Number }) => {
    const dispatch = useDispatch<AppDispatch>();
    const room = useSelector((state: any) => state.room.rooms);
    const seats = useSelector((state: any) => state.seat.seats);
    // console.log(seats);
    useEffect(() => {
        dispatch(getScreenById(id));
        dispatch(getSeatsByIdRoom(id));
    }, [dispatch]);
    return (
        <>
            <div className="container mx-auto my-10">
                <div className="my-10">
                    <ScreenView />
                </div>
                <div className="w-[70%] mx-auto">
                    <div className="grid grid-cols-8 gap-4 p-6 backdrop-blur-md bg-gray-100/10 rounded-2xl ">
                            {seats.map((seat: Seat , index: Number | any) => {
                                return <SeatItem key={index} seat={seat} setListSelectedSeats={setListSelectedSeats} listSelectedSeats={listSelectedSeats} showtimeId={showtime} indexShowTimes={indexShowTimes}/>
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Screen;