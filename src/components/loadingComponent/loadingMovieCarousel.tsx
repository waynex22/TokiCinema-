const LoadingMovieCarousel = () => {

    return (
        <>
        <div className="flex items-center justify-center w-full h-full relative backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 ">
      <button
        aria-label="slide backward"
        className="absolute z-30 left-[-2%] focus:text-blue-300 cursor-pointer"
        
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
      <div className="w-full relative flex items-center justify-center">
        <div className="h-full w-fit mx-auto overflow-x-hidden overflow-y-hidden">
          <div
            id="slider"
            className="h-full flex items-center justify-between transition ease-out duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
           
          >
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-shrink-0 gap-2 animate-pulse">
                <div className="mx-2 relative group">
                    <div  className="relative object-cover object-center object-fit w-[350px] h-[500px] rounded-md backdrop-blur-0 bg-gray-100/10" />
                    
                </div>

            </div>
            ))}
          </div>
        </div>
      </div>
      <button
        aria-label="slide forward"
        className="absolute z-30 right-[-2%] focus:outline-none focus:text-blue-300 "
       
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
        </>
    )
}
export default LoadingMovieCarousel;