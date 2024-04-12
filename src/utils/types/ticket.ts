export type Ticket = {
    _id : string
    user_id: string
    seat_id: string[]
    show_timeId: string
    show_timeIndex: number
    combo_id: object[]
    price: number
    status: string
    payment: string
}