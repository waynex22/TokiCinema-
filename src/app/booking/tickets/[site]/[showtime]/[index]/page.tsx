'use client'
import { CardBooking, DescriptionSeat, Screen, Spinner } from "@/components";
import PrivateRouter from "@/components/privateRouter";
import { getScreenById } from "@/redux/slices/roomSlice";
import { getShowTimeById } from "@/redux/slices/showTimeSlice";
import { AppDispatch } from "@/redux/store";
import { formatDate, formatTime } from "@/utils/formats";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface prop {
    params: {
        site: String,
        showtime: String,
        index: Number
    },
    searchParams: {}
}
const Booking: React.FC<prop> = (prop) => {
    const params = prop.params;
    const { site, showtime, index } = params;
    const dispatch = useDispatch<AppDispatch>();
    const room = useSelector((state: any) => state.room.rooms);
    const showTimeMovie = useSelector((state: any) => state.showTime.showTime);
    useEffect(() => {
        dispatch(getShowTimeById(showtime));
        dispatch(getScreenById(site));
    }, [dispatch]);
    const { cinema_id, movie_id, show_date, show_times, room_id, _id } = showTimeMovie;
    const [listSelectedSeats, setListSelectedSeats] = useState<any>([]);
    return (
        <>
        <PrivateRouter>
            <div className="container mx-auto my-10">
                <div className="backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 min-h-[50px]">
                    <div className="p-2">
                        {showTimeMovie.length === 0 ? (
                           <div>....</div>
                        ) : (
                            <>
                                <div className="flex items-center justify-start w-[50%]">
                                    <span>{cinema_id.name}</span>
                                    <div className="w-[1px] py-2 mx-4 bg-white"></div>
                                    <span>{room_id.room_name}</span>
                                    <div className="w-[1px] py-2 mx-4 bg-white"></div>
                                    <span>{formatDate(show_date)}</span>
                                    <div className="w-[1px] py-2 mx-4 bg-white"></div>
                                    <div className="flex items-start justify-center border w-fit h-fit  border-white px-4 py-2 rounded-lg">
                                            <p className="mx-2">{show_times[Number(index)]}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <Screen id={site} setListSelectedSeats={setListSelectedSeats} listSelectedSeats={listSelectedSeats} showtime={showtime} indexShowTimes={index}/>
                <DescriptionSeat/>
                <CardBooking showTime={showTimeMovie} index={index} listSelectedSeats={listSelectedSeats} />
            </div>
            </PrivateRouter>
        </>
    )
}
export default Booking;