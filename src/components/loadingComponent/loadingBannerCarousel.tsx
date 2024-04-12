import ListBanner from "../list/listBanner";

const LoadingBannerCarousel = () => {

    return (
        <div className="relative w-full">
            <div className="w-full overflow-hidden ">
                <div
                    className="flex transition-transform duration-700 ease-out relative"
                >
                    {Array.from({ length: 5 }).map((banner: any, index: number) => (
                        <div className="flex flex-shrink-0 items-center justify-center w-full ">
                        <div className="mx-2 ">
                            <div  className="backdrop-blur-md bg-gray-100/10 w-full min-w-[1000px] h-[500px] rounded-2xl p-4 " />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <button
                aria-label="slide backward"
                className="absolute z-30 top-[50%] left-[10%] focus:text-blue-300 cursor-pointer"
                
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    />
                </svg>
            </button>
            <button
                aria-label="slide forward"
                className="absolute z-30 top-[50%] right-[10%] focus:outline-none focus:text-blue-300 "
               
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};
export default LoadingBannerCarousel;