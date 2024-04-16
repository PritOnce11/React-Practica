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
  
    // Recorrer selectedRooms
    for (let i = 0; i < selectedRooms.length; i++) {
      // Encontrar la habitación en habitacionesCopy que coincide con el número de habitación en selectedRooms
      let roomIndex = habitacionesCopy.findIndex(room => room.num === selectedRooms[i]);
  
      if (roomIndex !== -1) {
        // Actualizar la habitación en habitacionesCopy a "Ocupado"
        dispatch(setHabitaciones({ num: selectedRooms[i], state: "Ocupada" }));
      }
    }
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