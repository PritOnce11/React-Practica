import { configureStore } from "@reduxjs/toolkit";
import { RickMortyApi } from "../apis/RickMortyApi";
import counter from "../slices/counterHook";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { RickMortyApiAll } from "../apis/RickMortyAllApi";
import HabitacionesSlice from "./Habitaciones";

export const store = configureStore({
    reducer: {
        counter: counter,
        [RickMortyApi.reducerPath]: RickMortyApi.reducer,
        [RickMortyApiAll.reducerPath]: RickMortyApiAll.reducer,
        Habitaciones: HabitacionesSlice,
    },
    
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(RickMortyApi.middleware, RickMortyApiAll.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;