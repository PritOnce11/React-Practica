import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

import { HabitacionSingle, setHabitaciones } from "../../store/Habitaciones";
import { RootState } from "../../store/store";
import { Global } from "@emotion/react";

export default function Hoteles() {


  const dispatch = useDispatch();
  const { habitaciones } = useSelector((state: RootState) => state.Habitaciones);

  useEffect(() => {
    console.log("useEffect:", habitaciones);
  }, [habitaciones]);

  const formik = useFormik({
    initialValues: {
      habitaciones: habitaciones.reduce((values: { [key: number]: boolean }, habitacion) => {
        values[habitacion.num] = false;
        return values;
      }, {} as { [key: number]: boolean }),
    },
    onSubmit: (rauw) => {
      console.log(rauw);

      const temporal: HabitacionSingle[] = [];

      Object.entries(rauw.habitaciones).forEach(([key, value]) => {
        const oldState = habitaciones.find(h => h.num === parseInt(key));
        if (oldState) {
          temporal.push({ num: parseInt(key), state: value ? oldState.state === "Libre" ? "Ocupada" : "Libre" : oldState.state });
        }
      })
      console.log("TEMPORAL:", temporal);
      dispatch(setHabitaciones(temporal));

    },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30vw",
        height: "50vh",
        border: "3px solid black",
        marginLeft: "500px",
      }}
    >
      <Global styles={{ body: { background: "yellow" } }} />

      <Form onSubmit={formik.handleSubmit}>
        {habitaciones.map((habitacion: HabitacionSingle) => (
          <Form.Checkbox
            key={habitacion.num}
            name={`habitaciones.${habitacion.num}`}
            label={`Habitación ${habitacion.num} | ${habitacion.state}`}
            onChange={formik.handleChange}
            checked={formik.values.habitaciones[habitacion.num]}
          />
        ))}

        <Form.Button type="submit" style={{ marginTop: "20px", marginLeft: "40px" }}>
          Submit
        </Form.Button>
      </Form>
    </div>
  );
}
