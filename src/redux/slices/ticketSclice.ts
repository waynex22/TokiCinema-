import request from "@/utils/request/request";
import { createAsyncThunk , createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    tickets : [],
    ticket: {},
    holdTicket: [],
    status : 'idle',
    statusAddTicket : 'idle',
    error : null
}

export const getTickets = createAsyncThunk('ticket/getTickets' , async () => {
    const res = await request.get('/ticket');
    return res.data;
});
interface IHoldTicket {
    seat_id: ['']
    user_id: string
    show_timeId: String
    show_timeIndex: Number
    price: Number
}
export const addTicket = createAsyncThunk('ticket/addTicket' , async (data: any) => {
    const res = await request.post('/ticket/add', data);
    return res.data.data;
})
export const addHoldTicket = createAsyncThunk('ticket/addHoldTicket' , async (data: IHoldTicket) => {
    const res = await request.post('/holdticket/add', data);
    return res.data.data;
})
export const updateHeldTicket = createAsyncThunk('ticket/updateHeldTicket', async ({ id, data }: { id: string, data: any }) => {
  const res = await request.patch(`/holdticket/update/${id}`, data);
  return res.data.data;
})
export const getHeldTicketById = createAsyncThunk('ticket/getHeldTicketById' , async (id: string) => {
    const res = await request.get(`/holdticket/${id}`);
    return res.data;
})
export const getHeldTicketPolulateById = createAsyncThunk('ticket/getHeldTicketPolulateById' , async (id: string) => {
    const res = await request.get(`/holdticket/populate/${id}`);
    return res.data.data;
})
export const deleteHeldTicket = createAsyncThunk('ticket/deleteHeldTicket' , async (id: string) => {
    const res = await request.delete(`/holdticket/delete/${id}`);
    return res.data.data;
})
export const getTicketByUserId = createAsyncThunk('ticket/getTicketByUserId' , async (id: string) => {
    const res = await request.get(`/ticket/user/${id}`);
    return res.data.data;
});

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
      resetTicket : (state) => {
        state.ticket = {};
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getTickets.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getTickets.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.tickets = action.payload;
          })
          .addCase(getTickets.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.error = action.payload;
          })
          .addCase(addHoldTicket.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addHoldTicket.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
          })
          .addCase(addHoldTicket.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.error = action.payload;
          })
          .addCase(getHeldTicketById.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getHeldTicketById.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.holdTicket = action.payload;
          })
          .addCase(getHeldTicketById.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.error = action.payload;
          })
          .addCase(addTicket.pending, (state) => {
            state.statusAddTicket = 'loading';
          })
          .addCase(addTicket.fulfilled, (state, action: PayloadAction<any>) => {
            state.statusAddTicket = 'succeeded';
            state.ticket = action.payload;
          })
          .addCase(getHeldTicketPolulateById.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getHeldTicketPolulateById.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.holdTicket = action.payload;
          })
          .addCase(getHeldTicketPolulateById.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.error = action.payload;
          })
          .addCase(getTicketByUserId.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getTicketByUserId.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.tickets = action.payload;
          })
    }
})
export const { resetTicket } = ticketSlice.actions;
export default ticketSlice.reducer;