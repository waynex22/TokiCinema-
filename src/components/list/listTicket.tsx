import { Ticket } from "@/utils/types/ticket";
import ItemTicket from "../item/itemTicket";
import NoTicket from "../noTicket";

const ListTicket = ({ tickets }: any) => {

    return (
        <>
            <div className="my-5 ">
                {tickets.length == 0 ? (
                    <NoTicket />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                        {tickets.map((ticket: Ticket) => (
                            <ItemTicket key={ticket._id} ticket={ticket} />
                        ))}
                    </div>
                )
                }
            </div>
        </>
    )
}
export default ListTicket;