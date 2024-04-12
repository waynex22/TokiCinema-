'use client'
import { useState } from "react";

const Payment: React.FC<any> = ({ onChange }) => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const handlePaymentMethodChange = (event: any) => {
        setSelectedPaymentMethod(event.target.value);
        onChange(event.target.value);
    };

    return (
        <>
            <div className="container mx-auto backdrop-blur-lg bg-gray-100/10 rounded-2xl min-h-[400px]">
                <div className="w-[70%] mx-auto">
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Voucher</h2>
                        <div className="flex items-center justify-start">
                            <input
                                className='p-2 min-w-[20%] w-fit my-2 backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-white focus:shadhow-lg focus:shadow-lg'
                                id="voucher"
                                placeholder=""
                                type="text"
                                required
                            />
                            <div className="relative cursor-pointer inline-flex items-center justify-center px-4 mx-4 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative">Áp dụng</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Phương thức thanh toán</h2>
                        <div className='flex items-center mx-10 my-6 justify-start'>
                            <label htmlFor="VNPAY" className="cursor-pointer">
                                <div className="flex justify-center items-center border border-white p-2 rounded-2xl">
                                    <input
                                        type="radio"
                                        id="VNPAY"
                                        value="VNPAY"
                                        checked={selectedPaymentMethod === "VNPAY"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <div className='ml-4 flex items-center justify-start'>
                                        <img src="https://play-lh.googleusercontent.com/o-_z132f10zwrco4NXk4sFqmGylqXBjfcwR8-wK0lO1Wk4gzRXi4IZJdhwVlEAtpyQ" className="w-[40px] h-[40px]" alt="" />
                                        <p className='ml-4 text-sm text-gray-100'>VNPAY</p>
                                    </div>
                                </div>

                            </label>
                        </div>
                        <div className='flex items-center mx-10 my-6 justify-start'>
                            <label htmlFor="MOMO" className="cursor-pointer">
                                <div className="flex justify-center items-center border border-white p-2 rounded-2xl">
                                    <input
                                        type="radio"
                                        id="MOMO"
                                        value="MOMO"
                                        checked={selectedPaymentMethod === "MOMO"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <div className='ml-4 flex items-center justify-start'>
                                        <img src="https://avatars.githubusercontent.com/u/36770798?s=280&v=4" className="w-[40px] h-[40px]" alt="" />
                                        <p className='ml-4 text-sm text-gray-100'>MOMO</p>
                                    </div>
                                </div>

                            </label>
                        </div>
                        <div className='flex items-center mx-10 my-6 justify-start'>
                            <label htmlFor="ZALOPAY" className="cursor-pointer">
                                <div className="flex justify-center items-center border border-white p-2 rounded-2xl">
                                    <input
                                        type="radio"
                                        id="ZALOPAY"
                                        value="ZALOPAY"
                                        checked={selectedPaymentMethod === "ZALOPAY"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <div className='ml-4 flex items-center justify-start'>
                                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" className="w-[40px] h-[40px]" alt="" />
                                        <p className='ml-4 text-sm text-gray-100'>ZALOPAY</p>
                                    </div>
                                </div>

                            </label>
                        </div>
                        <div className='flex items-center mx-10 my-6 justify-start'>
                            <label htmlFor="ATM" className="cursor-pointer">
                                <div className="flex justify-center items-center border border-white p-2 rounded-2xl">
                                    <input
                                        type="radio"
                                        id="ATM"
                                        value="ATM"
                                        checked={selectedPaymentMethod === "ATM"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <div className='ml-4 flex items-center justify-start'>
                                        <img src="https://seekvectors.com/files/download/master-card-logo.png" className="w-[45px] h-[40px]" alt="" />
                                        <p className='ml-4 text-sm text-gray-100'>ATM/Internt Banking</p>
                                    </div>
                                </div>

                            </label>
                        </div>
                    </div>
                    <div className="p-4 flex">
                        <input type="checkbox" />
                        <p className="ml-4 text-gray-100">Bạn phải chấp nhận các điều khoản và dịch vụ của Toki</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;