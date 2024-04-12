import Marquee from "react-fast-marquee";
const NoShowTime = ( ) => {
    return (
        <div className="mx-auto container backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
            <Marquee className="w-fit flex">
                            <div className="flex items-center">
                                <p className="font-bold text-lime-200 text-2xl">C</p>
                                <p className="font-bold text-lime-300 text-2xl">h</p>
                                <p className="font-bold text-teal-300 text-2xl">ư</p>
                                <p className="font-bold text-teal-500 text-2xl">a</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-2xl">C</p>
                                <p className="font-bold text-pink-300 text-2xl">ó</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-pink-300 text-2xl">X</p>
                                <p className="font-bold text-pink-400 text-2xl">u</p>
                                <p className="font-bold text-amber-500 text-2xl">Ấ</p>
                                <p className="font-bold text-amber-400 text-2xl">t</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-2xl">C</p>
                                <p className="font-bold text-pink-300 text-2xl">h</p>
                                <p className="font-bold text-pink-400 text-2xl">i</p>
                                <p className="font-bold text-amber-500 text-2xl">ế</p>
                                <p className="font-bold text-amber-400 text-2xl">u</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <p>(Vui lòng chọn lại ngày)</p>
                            </div>
                        </Marquee>
        </div>
    )
}
export default NoShowTime;