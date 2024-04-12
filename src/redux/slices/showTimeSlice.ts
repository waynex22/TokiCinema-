import request from "@/utils/request/request";
import { createAsyncThunk , createSlice , PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    showTimes: [],
    showTime: [],
    status: 'idle',
    error: null,
}

export const getShowTimes = createAsyncThunk('showTime/getShowTimes', async () => {
    const res = await request.get('/showtime');
    return res.data.data;
});
export const getShowTimeById = createAsyncThunk('showtime/getById', async (id: String) => {
    const res = await request.get(`/showtime/${id}`);
    return res.data.data;
})
export const getShowTimesByMovieId = createAsyncThunk('showTime/getShowTimesByMovieId', async (movieId: string) => {
    const res = await request.get(`/showtime/movie/${movieId}`);
    return res.data.data;
});


const showTimeSlice = createSlice({
    name: 'showTime',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getShowTimes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getShowTimes.fulfilled, (state, action) => {
                state.status = 'successed';
                state.showTimes = action.payload;
            })
            .addCase(getShowTimes.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getShowTimesByMovieId.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getShowTimesByMovieId.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'successed';
                state.showTimes = action.payload;
            })
            .addCase(getShowTimesByMovieId.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getShowTimeById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getShowTimeById.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'successed';
                state.showTime = action.payload;
            })
            .addCase(getShowTimeById.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
});

export default showTimeSlice.reducer;