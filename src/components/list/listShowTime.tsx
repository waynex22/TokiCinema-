import CardShowTime from '../card/cardShowTime';
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimesByMovieId } from "@/redux/slices/showTimeSlice";
import NoShowTime from '../noShowTime';
import { ShowTime } from '@/utils/types/showTime';
import { formatDate } from '@/utils/formats';
const ListShowTime = (props: any) => {
    const { showTimeId } = props;
    const dispatch = useDispatch<AppDispatch>();
    const showTimes = useSelector((state: any) => state.showTime.showTimes);
    useEffect(() => {
        dispatch(getShowTimesByMovieId(showTimeId));
    }, [dispatch])
    const ListShowTimes = showTimes.filter((showTime: ShowTime) => formatDate(showTime.show_date) == formatDate(props.selectedDate));
    // console.log(ListShowTimes);
    return (
        <>
            {ListShowTimes.length === 0 ? (
                <NoShowTime />
            ) : (
                <>
                    {ListShowTimes.map((showTime: ShowTime, index: number) => (
                        <div key={index} className="col-span-1">
                            <CardShowTime key={index} showTime={showTime} />
                        </div>
                    ))}</>
            )}

        </>
    )
}
export default ListShowTime;