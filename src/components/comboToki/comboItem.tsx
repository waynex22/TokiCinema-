'use client'
import React, { useState, useEffect } from 'react';
import { formatNumberToVND } from '@/utils/formats';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setComboSlected } from '@/redux/slices/comboTokiSlice';

interface ComboItemProps {
    item: {
        _id: string;
        name: string;
        price: number;
        description: string;
        thumbnail: string;
    };
    index: number;
}

const ComboItem: React.FC<ComboItemProps> = ({ item , index}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { name, price, _id, description, thumbnail } = item;
    const [quantity, setQuantity] = useState<number>(0);

    const decreaseQuantity = (combo_id: string) => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            const newData = {
                combo_id: combo_id,
                quantity: quantity - 1,
                price: price
            };
            addCombos(newData);
        }   
    };
    const increaseQuantity = (combo_id: string) => {
        if (quantity < 10 && quantity >= 0) {
            setQuantity(quantity + 1); 
            const newData = {
                combo_id: combo_id,
                quantity: quantity + 1,
                price: price
            };
            addCombos(newData);
        }
    };
    const addCombos = (data: any) => {
       dispatch(setComboSlected(data));
    };

    return (
        <div className="col-span-2 w-[400px]">
            <div className="flex items-start justify-center">
                <div className="w-[150px] mx-4">
                    <img src={thumbnail} alt={name} className="" />
                </div>
                <div className="mx-4">
                    <p className="text-xl font-bold">{name}</p>
                    <p className="my-2 text-sm text-gray-300 font-light">{description}</p>
                    <div className="flex items-start justify-start">
                        <p className="font-bold">Giá : </p>
                        <p className="mx-2">{formatNumberToVND(price)}</p>
                    </div>
                    <div className="my-2 flex justify-between items-center h-[40px] rounded-lg p-2 w-[100px] bg-transparent border-solid border-2 border-gray-200">
                        <div onClick={() => decreaseQuantity(_id)} className="cursor-pointer text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                        <div>{quantity}</div>
                        <div onClick={() => increaseQuantity(_id)} className="cursor-pointer text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComboItem;
