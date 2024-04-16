import { createSlice } from "@reduxjs/toolkit";

interface ChangeRoom{
    payload: {
        num: number,
        state: "Libre" | "Ocupada"
    }
}

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
        setHabitaciones: (state, action: ChangeRoom) => {
            // Hacemos una copia del array de habitacionesCopy
            let copyArray = [...state.habitacionesCopy];
            
            // Buscamos el índice de la habitación a actualizar
            let indexToUpdate = copyArray.findIndex(habitacion => habitacion.num === action.payload.num);
            
            // Si encontramos la habitación, la actualizamos
            if (indexToUpdate !== -1) {
                copyArray[indexToUpdate] = { ...copyArray[indexToUpdate], state: action.payload.state };
            }
            
            // Almacenamos la copia en el estado
            state.habitacionesCopy = copyArray;
        }
    }
})

export const { setHabitaciones, cancelarReserva } = HabitacionesSlice.actions

export default HabitacionesSlice.reducer;