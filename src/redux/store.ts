import { configureStore } from "@reduxjs/toolkit";
import movieSlice, { getMovies } from "./slices/movieSlice";
import bannerSlice, { getBanner } from "./slices/bannerSlice";
import authSlice from "./slices/authSlice";
import showTimeSlice, { getShowTimes } from "./slices/showTimeSlice";
import roomSlice from "./slices/roomSlice";
import seatSlice from "./slices/seatSlice";
import ticketSclice from "./slices/ticketSclice";
import comboTokiSlice from "./slices/comboTokiSlice";
import paymentSlice from "./slices/paymentSlice";
export const store = configureStore({
    reducer: {
        movie: movieSlice,
        banner: bannerSlice,
        auth: authSlice,
        showTime: showTimeSlice,
        room: roomSlice,
        seat: seatSlice,
        ticket: ticketSclice,
        ComboToki: comboTokiSlice,
        Payment: paymentSlice
    },
    });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;