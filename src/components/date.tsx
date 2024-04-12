'use client'
import React, { useEffect, useState } from "react";
interface DateComponentProps {
    onDateChange: (date: any) => void;
}
const DateComponent: React.FC<DateComponentProps> = ({ onDateChange }) => {
    const [dates, setDates] = useState<{ day: number; month: number; dayOfWeek: string; selected: boolean }[]>([]);

    useEffect(() => {
        const currentDate = new Date();
        const nextFifteenDays: { day: number; month: number; dayOfWeek: string; selected: boolean }[] = [];

        for (let i = 0; i < 15; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + i);
            nextFifteenDays.push({
                day: date.getDate(),
                month: date.getMonth() + 1,
                dayOfWeek: getDayOfWeek(date.getDay()),
                selected: i === 0 ? true : false 
            });
        }

        setDates(nextFifteenDays);
    }, []);

    const getDayOfWeek = (dayIndex: number): string => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[dayIndex];
    };

    const handleSelect = (index: number) => {
        const updatedDates = dates.map((date, i) => {
            if (i === index) {
                const change = new Date(2024, date.month - 1, date.day, 22, 19, 32);
                const dateString = change.toString();
                onDateChange(dateString);
                return { ...date, selected: true };
            } else {
                return { ...date, selected: false };
            }
        });
        setDates(updatedDates);
    };
    return (
        <div className="">
            <div className="p-4 flex flex-wrap items-center justify-start">
                {dates.map((date, index) => (
                    <div className="mx-10 p-2" key={index}>
                        <div className={`flex items-center cursor-pointer ${date.selected ? 'border border-white py-2 px-4 rounded-lg' : ''}`} onClick={() => handleSelect(index)}>
                            <div className="text-sm">
                                <p>{date.month < 10 ? '0' + date.month : date.month}</p>
                                <p>{date.dayOfWeek}</p>
                            </div>
                            <div className="ml-3 text-2xl font-bold">
                                {date.day}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DateComponent;