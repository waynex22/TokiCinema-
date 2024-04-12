import Marquee from "react-fast-marquee";
const NoTicket = ( ) => {
    return (
        <div className="mx-auto container backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
            <Marquee className="w-fit flex">
                            <div className="flex items-center">
                                <p className="font-bold text-lime-200 text-2xl">K</p>
                                <p className="font-bold text-lime-300 text-2xl">h</p>
                                <p className="font-bold text-teal-300 text-2xl">ô</p>
                                <p className="font-bold text-teal-500 text-2xl">n</p>
                                <p className="font-bold text-teal-500 text-2xl">g</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-2xl">C</p>
                                <p className="font-bold text-pink-300 text-2xl">ó</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-pink-300 text-2xl">D</p>
                                <p className="font-bold text-pink-400 text-2xl">ữ</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-2xl">L</p>
                                <p className="font-bold text-pink-300 text-2xl">i</p>
                                <p className="font-bold text-pink-400 text-2xl">ệ</p>
                                <p className="font-bold text-amber-500 text-2xl">u</p>
                            </div>
                        </Marquee>
        </div>
    )
}
export default NoTicket;