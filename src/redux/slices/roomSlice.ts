import request from "@/utils/request/request";
import { createSlice , createAsyncThunk , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    rooms : [],
    status : 'idle',
    error : null
}

export const getScreenById = createAsyncThunk('movie/getScreenById' ,  async (id: String) => {
    const res = await request.get(`/room/${id}`);
    return res.data.data;
}) 

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(getScreenById.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getScreenById.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.rooms = action.payload;
          })
      },
})

export default roomSlice.reducer;