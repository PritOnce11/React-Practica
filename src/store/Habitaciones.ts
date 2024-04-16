import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HabitacionSingle{
    num: number,
    state: "Libre" | "Ocupada"
}

interface HabitacionesType {
    habitaciones: HabitacionSingle[],
    habitacionesCopy: HabitacionSingle[]
}

const initialHabitaciones: HabitacionSingle[] = [
    {num: 1, state: "Libre"},
    {num: 2, state: "Libre"},
    {num: 3, state: "Libre"},
    {num: 4, state: "Libre"},
    {num: 5, state: "Libre"},
    {num: 6, state: "Libre"},
    {num: 7, state: "Libre"},
    {num: 8, state: "Libre"},
    {num: 9, state: "Libre"},
    {num: 10, state: "Libre"}
]

const initialState: HabitacionesType= {
    habitaciones: initialHabitaciones,
    habitacionesCopy: [...initialHabitaciones]
}
const HabitacionesSlice = createSlice({
    name: 'Habitaciones',
    initialState:initialState,
    reducers: {
        setHabitaciones: (state, action: PayloadAction<HabitacionSingle[]>) => {
            // Actualizamos todo el estado de habitacionesCopy con la nueva lista de habitaciones
            state.habitacionesCopy = action.payload;
        }
    }
})

export const { setHabitaciones } = HabitacionesSlice.actions

export default HabitacionesSlice.reducer;
