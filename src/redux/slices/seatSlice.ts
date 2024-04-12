import request from "@/utils/request/request";
import { createSlice , createAsyncThunk , PayloadAction } from "@reduxjs/toolkit";

interface ICheckSeat {
    _id: String
    showTimeId: String,
    index : Number
}
const initialState = {
    seats: [],
    is_available: true,
    status: 'idle',
    error: null
}

export const getSeats = createAsyncThunk('/seat/getSeats' , async () => {
    const res = await request.get('/seat');
    return res.data.data;
});
export const getSeatsByIdRoom = createAsyncThunk('seat/getSeatsById' , async (id: String) => {
    const res = await request.get(`/seat/getByRoomId/${id}`);
    return res.data.data;
})
export const checkSeat = createAsyncThunk('seat/checkseat' , async (data: ICheckSeat) => {
    const res = await request.post(`/seat/checkseat`, data);
    return res.data.data;
})
const seatSlice = createSlice({
    name : 'seat',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSeatsByIdRoom.pending , (state) => {
            state.status = 'loading';
        })
        .addCase(getSeatsByIdRoom.fulfilled , (state , action: PayloadAction <any>) => {
            state.status = 'succeeded';
            state.seats = action.payload;
        })
        .addCase(getSeatsByIdRoom.rejected , (state , action: PayloadAction <any>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(checkSeat.fulfilled , (state , action: PayloadAction <any>) => {
            const payload = action.payload;
            const isAvailableSeat = action.payload;
        })
    }
        
})

export default seatSlice.reducer;