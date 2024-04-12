import request from "@/utils/request/request";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    payment: {},
    paymentUrl: null,
    paymentId: null,
    status: 'idle',
    paymentStatus: 'idle',
    error: null
}

export const createPayment = createAsyncThunk(
    'payment/createPayment',
    async (data: {user_id: string ,amount: string , bankCode: string, language: string}) => {
        const res = await request.post('/vnpay/createUrl', data);
        return res.data
    }
)
export const checkPayment = createAsyncThunk(
    'payment/checkpayment',
    async (data: {vnp_TxnRef: string}) => {
        const res = await request.post('/vnpay/checkpayment', data);
        return res.data.data
    }
)
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        resetUrlPayment: (state) => {
            console.log('resetUrlPayment');
            
            state.paymentUrl = null
        },
        resetPaymentStatus: (state) => {
            console.log('resetPaymentStatus');
            state.paymentStatus = 'idle';
        },
        resetPaymentId: (state) => {
            console.log('resetPaymentId');
            state.paymentId = null
        },
        resetStateForPayment: (state) => {
            state.paymentUrl = null;
            state.paymentId = null;
            state.paymentStatus = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPayment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.paymentStatus= 'waiting';
                state.paymentUrl = action.payload.data;
                state.paymentId = action.payload.orderId;
            })
            .addCase(checkPayment.fulfilled, (state, action) => {
                if (action.payload && action.payload.status === 'success') {
                    state.paymentStatus = 'succeeded';
                    state.payment = action.payload;
                }
            })
    }
    
})
export const { resetUrlPayment, resetPaymentStatus ,resetPaymentId, resetStateForPayment} = paymentSlice.actions;
export default paymentSlice.reducer;