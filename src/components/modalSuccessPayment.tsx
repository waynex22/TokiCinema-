
import { resetStateForPayment } from "@/redux/slices/paymentSlice";
import { resetTicket } from "@/redux/slices/ticketSclice";
import { AppDispatch } from "@/redux/store";
import { Ticket } from "@/utils/types/ticket";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
const SuccessPayment = ({ isOpen, ticket }: { isOpen: boolean, ticket: Ticket}) => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    // console.log(ticket);
    const idTicket = ticket._id;
    const handleToListTicket = () => {
        dispatch(resetStateForPayment());
        dispatch(resetTicket());
        router.push(`/mytickets/${idTicket}`);
    }
    return (
        <>
            {isOpen ?
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-30 z-50">
                    <div className="bg-gray-100/10 backdrop-blur-sm rounded-xl p-4 px-10">
                        <div className="m-2 flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[70px] h-[70px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <h3 className="font-bold my-4">Đặt Vé Thành Công</h3>
                            <div className="col-span-1 flex items-center justify-center my-2">
                                <div onClick={handleToListTicket} className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative">Xem vé của tôi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}
export default SuccessPayment;