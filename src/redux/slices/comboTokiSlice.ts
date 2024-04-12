import request from "@/utils/request/request";
import { createSlice , createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface comboSlected {
    combo_id: string;
    quantity: number;
    price: number;
}
const initialState = {
    combos : [] ,
    comboSlected : [] as comboSlected[],
    status : 'idle',
    error : null
}

export const getComBoToki = createAsyncThunk('comboToki/getComBoToki', async () => {
    const  res = await request.get('/comboToki');
    return res.data;
})

const comboTokiSlice = createSlice({
    name : 'comboToki',
    initialState,
    reducers : {
        setComboSlected : (state, action: PayloadAction<any>) => {
            const data = action.payload;
            const checkData = state.comboSlected.some((item: any) => item.combo_id === data.combo_id);
            if(checkData){
                const newData = state.comboSlected.map((item: any) => {
                    if (item.combo_id === data.combo_id) {
                        if(item.quantity > data.quantity){
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                                price: item.price
                            };
                        }else{
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                price: item.price 
                            };
                        }
                    }
                    return item;
                });
                state.comboSlected = newData;
            }else {
                state.comboSlected = [...state.comboSlected, data];
            }
        },
        resetComboSlected : (state) => {
            state.comboSlected = [];
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getComBoToki.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getComBoToki.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.combos = action.payload;
        })
        .addCase(getComBoToki.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})
export const { setComboSlected, resetComboSlected } = comboTokiSlice.actions;
export default comboTokiSlice.reducer;