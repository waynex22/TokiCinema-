'use client';
import { DateComponent } from "@/components";
import ListShowTime from "@/components/list/listShowTime";
import { useState } from "react";

const ShowTimePage = (props: any) => {
    const { params } = props;
    const { showtimeId } = params;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };
    return (
        <>
            <div className="container mx-auto my-10">
                <div className="my-10 backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 min-h-[200px]">
                    <DateComponent onDateChange={handleDateChange} />
                </div>
                <ListShowTime showTimeId={showtimeId} selectedDate={selectedDate} />
            </div>
        </>
    );
};
export default ShowTimePage;