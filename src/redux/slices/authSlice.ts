import * as request from '@/utils/request/request'
import { createSlice , createAsyncThunk , PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    user: null,
    userId: null,
    userRole: null,
    modalOpen: false,
    status: "idle",
    error: null
}
export const getUser = createAsyncThunk('auth/getUser', async () => {
    const token: any = localStorage.getItem('token');
    const res = await request.post('/account/user', {token : token});
    return res.data.data;
})
export const logOut =  (dispatch: any) => {
    const token = localStorage.getItem('token');
    if(token){
        localStorage.removeItem('token');
        dispatch(setUser(null));
    }
}
export const login = createAsyncThunk('auth/login' , async (userData :{email: string , password: string},thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
        const res: any = await request.post('/account/login', userData);
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            dispatch(getUser());
            return res.data; 
        } else if (res.status === 204) {
            throw new Error('User not found');
        } else {
            throw new Error('Unexpected server response');
        }
    } catch (error) {
        throw new Error('Login failed');
    }
})
export const register = createAsyncThunk('auth/register' , async (userData :{name: string , email: string , password: string},thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
        const res: any = await request.post('/account/register', userData);
        if (res.status === 201) {
            dispatch(login({ email: userData.email, password: userData.password }));
        } else if (res.status === 204) {
            throw new Error('User not found');
        } else {
            throw new Error('Unexpected server response');
        }
    } catch (error) {
        throw new Error('Register failed');
    }
})
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setModalOpen(state, action) {
            state.modalOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending , (state) => {
            state.status = 'loading';
        })
        .addCase(getUser.fulfilled , (state , action: PayloadAction <any>) => {
            state.status = 'succeeded';
            state.user = action.payload;
            state.userId = action.payload.id;
        })
        .addCase(getUser.rejected , (state , action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})
export const { setUser , setModalOpen} = authSlice.actions;
export default authSlice.reducer;