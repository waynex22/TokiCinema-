import { checkSeat } from '@/redux/slices/seatSlice';
import { AppDispatch } from '@/redux/store';
import { getSeatTypeClass, Isvalibale } from '@/utils/style/seatStyle';
import { Seat } from '@/utils/types/seat';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingListSeat from '../loadingComponent/loadingListSeat';
const SeatItem = ({ seat, setListSelectedSeats , listSelectedSeats , showtimeId , indexShowTimes }: { seat: Seat; setListSelectedSeats: any , listSelectedSeats: any, showtimeId: String, indexShowTimes: Number }) => {
    const { _id, name, type } = seat;
    const dispatch = useDispatch<AppDispatch>();
    const [ isLoading , setIsLoading ] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); 
        return () => clearTimeout(timer);
    },[])
    const isSelected = listSelectedSeats.find((selectedSeat: any) => selectedSeat._id === seat._id);
    const [ is_availableSeat , setIsAvailableSeat ] = useState<Boolean>(false);
    const dataCheckSeat = {
        _id : _id,
        showTimeId: showtimeId,
        index: indexShowTimes
    }
    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const actionResult = await dispatch(checkSeat(dataCheckSeat));
                const isAvailableSeat = actionResult.payload;
                setIsAvailableSeat(isAvailableSeat);
                // console.log(isAvailableSeat);
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchAvailability();
    }, [dispatch]);
    const selectSeat = (seat: any) => {
        if(isSelected || !is_availableSeat) {
            setListSelectedSeats(listSelectedSeats.filter((selectedSeat: any) => selectedSeat._id !== seat._id));
        } else {
            setListSelectedSeats([...listSelectedSeats, seat]);
        }
    };
    return (
        <>
        {isLoading ? (
            <LoadingListSeat />
        ): (
            <>
            {type === 'couple' ? (
                <div className="col-span-2 text-center flex items-center justify-center">
                    <div onClick={() => selectSeat(seat)} className={`p-2 w-[50%] rounded-lg  ${Isvalibale(is_availableSeat)}   ${isSelected ? 'bg-blue-500 border border-white' : `${getSeatTypeClass(seat.type)}`}`}>
                        <p>{name}</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="col-span-1 text-center flex items-center justify-center">
                        <div onClick={() => selectSeat(seat)} className={`p-2 w-[50%] rounded-lg   ${Isvalibale(is_availableSeat)} ${isSelected ? 'bg-blue-500 border border-white' : `${getSeatTypeClass(seat.type)}`}`}>
                            <p>{name}</p>
                        </div>
                    </div>
                </>
            )}
            </>
        )}
            
        </>
    )
}

export default SeatItem;
