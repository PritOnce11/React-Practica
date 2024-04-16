import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HabitacionSingle, setHabitaciones, cancelarReserva } from "../../store/Habitaciones";
import { RootState } from "../../store/store";
import { Global } from "@emotion/react";

export default function Hoteles() {
  const dispatch = useDispatch();
  const { habitaciones, habitacionesCopy } = useSelector((state: RootState) => state.Habitaciones);

  // Estado local para almacenar los números de las habitaciones seleccionadas
  const [selectedRooms, setSelectedRooms] = useState<number[]>([]);

  function handleCheckboxChange(e: any, roomNumber: number) {
    if (e.target.checked) {
      setSelectedRooms(prevRooms => [...prevRooms, roomNumber]);
    } else {
      setSelectedRooms(prevRooms => prevRooms.filter(num => num !== roomNumber));
    }
  }

  useEffect(() => {
    console.log(habitaciones, habitacionesCopy);
  }, [habitaciones, habitacionesCopy])
  
  function Submit2(e: any) {
    e.preventDefault();
  
    // Crear una copia de habitacionesCopy
    let newHabitacionesCopy = [...habitacionesCopy];
  
    // Recorrer selectedRooms
    for (let i = 0; i < selectedRooms.length; i++) {
      // Encontrar la habitación en newHabitacionesCopy que coincide con el número de habitación en selectedRooms
      let roomIndex = newHabitacionesCopy.findIndex(room => room.num === selectedRooms[i]);
  
      if (roomIndex !== -1) {
        // Crear una copia de la habitación
        let roomCopy = { ...newHabitacionesCopy[roomIndex] };
  
        // Cambiar el estado de la habitación copiada a "Ocupada" si está "Libre" y viceversa
        roomCopy.state = roomCopy.state === "Ocupada" ? "Libre" : "Ocupada";
  
        // Reemplazar la habitación en newHabitacionesCopy con la habitación copiada
        newHabitacionesCopy[roomIndex] = roomCopy;
      }
    }
  
    // Hacer un solo dispatch con la nueva lista de habitaciones
    dispatch(setHabitaciones(newHabitacionesCopy));
  }
  
  
  return (
    <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} onSubmit={Submit2}>
      <Global styles={{ body: { background: "grey" } }} />
      <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', border: '3px solid black', borderRadius: '10px', width: '300px' }}>
        {habitacionesCopy.map((habitacion: HabitacionSingle) => (
          <div key={habitacion.num} style={{ marginBottom: '10px' }}>
            <label style={{ color: 'black' }}>
              <input type="checkbox" onChange={(e) => handleCheckboxChange(e, habitacion.num)} />
              Habitación {habitacion.num} | {habitacion.state}
            </label>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100px', margin: '20px auto' }}>
          <input style={{marginLeft: '15px'}} type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}