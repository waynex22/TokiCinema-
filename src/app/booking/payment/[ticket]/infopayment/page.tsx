'use client';
import { LoadingPayment, Payment } from "@/components";
import CardHeldBooking from "@/components/card/cardHeldBooking";
import SuccessPayment from "@/components/modalSuccessPayment";
import { checkPayment, createPayment } from "@/redux/slices/paymentSlice";
import { addTicket, deleteHeldTicket, getHeldTicketPolulateById } from "@/redux/slices/ticketSclice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const InfoPayment = ({ params }: { params: any }) => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [totalPriceCombos, setTotalPriceCombos] = useState<number>(0);
    const combosSelected = useSelector((state: any) => state.ComboToki.comboSlected);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handePaymentMethodChange = (payment: string) => {
        setPaymentMethod(payment);
    }
    useEffect(() => {
        const totalPriceCombo = combosSelected.reduce((total: number, combo: any) => {
            return total + combo.quantity * combo.price;
        }, 0);
        setTotalPriceCombos(totalPriceCombo);
    }, [combosSelected])
    const heldTicketId = params.ticket;
    useEffect(() => {
        dispatch(getHeldTicketPolulateById(heldTicketId));
    }, [dispatch]);
    const user_id = useSelector((state: any) => state.auth?.userId);
    const heldTicket = useSelector((state: any) => state.ticket.holdTicket);
    const totalTicketPrice = heldTicket.price + totalPriceCombos;
    const vnPayUrl = useSelector((state: any) => state.Payment.paymentUrl);
    const statusPayment = useSelector((state: any) => state.Payment.paymentStatus);
    const paymentId = useSelector((state: any) => state.Payment.paymentId);
    const newTicketAdded = useSelector((state: any) => state.ticket.ticket);
    useEffect(() => {
        if (vnPayUrl) {
            window.open(vnPayUrl, '_blank', 'width=1100,height=700');
        }
    }, [vnPayUrl, paymentId]);
    useEffect(() => {
        // console.log(statusPayment);
        if (statusPayment === 'succeeded') {
            successBookingTicket();
        }
    }, [statusPayment]);
    useEffect(() => {
        const sendCheckPayment = setInterval(() => {
            if (statusPayment === 'waiting') {
                setIsLoading(true);
                dispatch(checkPayment({ vnp_TxnRef: paymentId }));
            } else if(statusPayment === 'succeeded') {
                clearInterval(sendCheckPayment);
                setIsLoading(false);
            }
        }, 3000);
        return () => clearInterval(sendCheckPayment);
    }, [dispatch, statusPayment, paymentId]);
    const successBookingTicket = () => {
        if (paymentMethod == '') return
        if (paymentMethod == 'VNPAY' && !paymentId) {
            dispatch(createPayment({ user_id: user_id, amount: heldTicket.price + totalPriceCombos, bankCode: 'NCB', language: 'vn' }));
        }
        if (statusPayment === 'succeeded') {
            const seatIds = heldTicket.seat_id.map((seat: any) => seat._id);
            dispatch(addTicket({ seat_id: seatIds, user_id: heldTicket.user_id, show_timeId: heldTicket.show_timeId._id, show_timeIndex: heldTicket.show_timeIndex, price: totalTicketPrice, combos: heldTicket.combos, payment: paymentMethod }));
            dispatch(deleteHeldTicket(heldTicketId));
        }
    }
    const deleteTicket = () => {
        dispatch(deleteHeldTicket(heldTicketId));
        router.push(`/`);
    }
    const deleteTime = new Date();
    deleteTime.setMinutes(deleteTime.getMinutes() + 15);
    const calculateRemainingTime = () => {
        const currentTime = new Date().getTime();
        return deleteTime.getTime() - currentTime;
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

    const formatTime = (milliseconds: number) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return (
        <>
            <div className="container mx-auto my-10">
                <LoadingPayment isLoading={isLoading} />
                <SuccessPayment isOpen={statusPayment === 'succeeded'}  ticket={newTicketAdded}/>
                <div className="backdrop-blur-md bg-gray-100/10 p-4 w-full rounded-2xl flex items-center justify-center">
                    <div className="flex items-center mx-2">
                        <p className="font-bold text-indigo-300 text-[30px]">P</p>
                        <p className="font-bold text-pink-300 text-[30px]">a</p>
                        <p className="font-bold text-pink-400 text-[30px]">y</p>
                        <p className="font-bold text-amber-500 text-[30px]">m</p>
                        <p className="font-bold text-amber-400 text-[30px]">e</p>
                        <p className="font-bold text-amber-200 text-[30px]">n</p>
                        <p className="font-bold text-orange-600 text-[30px]">t</p>
                    </div>
                </div>
                <div className="my-2 backdrop-blur-0 mx-auto bg-gray-100/10 rounded-xl p-4 w-[20%]">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-md font-bold">Thời gian thanh toán</p>
                        <span>{formatTime(remainingTime)}</span>
                    </div>
                </div>
                <div className="my-5">
                    <Payment onChange={handePaymentMethodChange} />
                </div>
                <div className="my-5">
                    <CardHeldBooking props={{ heldTicket, totalPriceCombos, totalTicketPrice, successBookingTicket }} />
                </div>
            </div>
        </>
    )
}
export default InfoPayment;