const LoadingListSeat = () => {
    return (
        <>
            <div className="w-[70%] mx-auto animate-pulse">
                <div className="grid grid-cols-8 gap-4 p-6 backdrop-blur-md bg-gray-100/10 rounded-xl">
                    {Array.from({ length: 1 }).map((_, index) => (
                        <div key={index} className="col-span-1 w-[20%] text-center flex items-center justify-center backdrop-blur-0  bg-gray-100/10">
                        </div>
            ))}
            </div>
        </div >
        </>
    )
}
export default LoadingListSeat;