
import ComboItem from "./comboItem";
const ComboToki: React.FC<any> = ({props}) => {
    const { comboToki } = props;
    return (
        <>
        <div className="container mx-auto backdrop-blur-0 bg-gray-100/10 p-4 rounded-2xl min-h-[500px] ">
            <div className="grid grid-cols-4 w-[80%] p-4 gap-4 mx-auto">
                {comboToki.map((combo: any, index: number ) => {
                    return <ComboItem key={index} item={ combo } index={index} />
                })}
            </div>
        </div>
        </>
    )
}
export default ComboToki;