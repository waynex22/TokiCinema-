const DescriptionSeat = () => {
    return (
        <>
            <div className="my-5 w-[20%]">
                <div className="flex flex-col justify-center items-center">
                    <div className="backdrop-blur-md bg-gray-100/10 p-2 w-full rounded-2xl min-h-[100px] flex flex-wrap">
                        <div className="flex items-start justify-start m-2">
                            <div className="col-span-2 text-center flex items-center justify-center">
                                <div className={`p-4 w-[50%] rounded-lg bg-gray-300/10 border`}>
                                </div>
                            </div>
                            <div className="ml-3">
                                <span>Ghế thường</span>
                            </div>
                        </div>
                        <div className="flex items-start justify-start m-2">
                            <div className="col-span-2 text-center flex items-center justify-center">
                                <div className={`p-4 w-[50%] rounded-lg bg-red-800/90 border`}>
                                </div>
                            </div>
                            <div className="ml-3">
                                <span>Ghế Vip</span>
                            </div>
                        </div>
                        <div className="flex items-start justify-start m-2">
                            <div className="col-span-2 text-center flex items-center justify-center">
                                <div className={`p-4 w-[50%] rounded-lg bg-pink-800/90 border`}>
                                </div>
                            </div>
                            <div className="ml-3">
                                <span>Ghế Couple</span>
                            </div>
                        </div>
                        <div className="flex items-start justify-start m-2">
                            <div className="col-span-2 text-center flex items-center justify-center">
                                <div className={`p-4 w-[50%] rounded-lg bg-blue-600/70 border`}>
                                </div>
                            </div>
                            <div className="ml-3">
                                <span>Đang chọn</span>
                            </div>
                        </div>
                        <div className="flex items-start justify-start m-2">
                            <div className="col-span-2 text-center flex items-center justify-center">
                                <div className={`p-4 w-[50%] rounded-lg bg-transparent border border-red-500`}>
                                </div>
                            </div>
                            <div className="ml-3">
                                <span>Đã đặt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DescriptionSeat;