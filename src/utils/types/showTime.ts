export type ShowTime = {
    _id: String,
    movie_id: String | Object,
    cinema_id: String | Object,
    room_id: String | Object,
    show_date: Date,
    showTime: Date | [] | any,
    price: Number
}