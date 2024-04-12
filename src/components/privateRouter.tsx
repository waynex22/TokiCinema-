'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setModalOpen } from "@/redux/slices/authSlice";


const PrivateRouter: React.FC<any> = ({ children }) => {
    const user = useSelector((state: any) => state.auth.user);
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (user == null) {
            setOpenModal(true);
            dispatch(setModalOpen(true));
        }else{
            setOpenModal(false);
            dispatch(setModalOpen(false));
        }
        // console.log('moumted');
        
    }, [children]);

    return children
};

export default PrivateRouter;
