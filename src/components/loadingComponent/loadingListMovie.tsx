const LoadingListMovie = () => {

    return (
        <>
            {Array.from({ length: 6 }).map((_, index: number) => (
                <div key={index} className="col-span-1 animate-pulse">
                    <div className="col-span-1 bg-gray-800/10 rounded-2xl p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                        <div className=" p-4">
                            <div  className="w-full h-96 object-cover rounded-2xl backdrop-blur-0 bg-gray-100/10" />
                            <h1 className="text-xl font-bold text-white mt-4 h-[50px]"></h1>
                            <p className=" w-[70%] h-[20px] rounded-xl my-1 backdrop-blur-0 bg-gray-100/10"></p>
                            <p className=" w-[70%] h-[20px] rounded-xl my-1 backdrop-blur-0 bg-gray-100/10"></p>
                            <p className=" w-[70%] h-[20px] rounded-xl my-1 backdrop-blur-0 bg-gray-100/10"></p>
                        </div>
                        <div className="max-w-[200px] items-center justify-center flex rounded-full mx-auto  p-[1px] shadow-lg">
                                <button className="flex-1 font-bold md:text-xl lg:text-sm bg- px-6 py-2 rounded-full">
                                    Mua vé
                                </button>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
};
export default LoadingListMovie;