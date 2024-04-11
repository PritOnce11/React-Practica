import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemoizedNames } from "../slices/memoHook";


export default function MemoApp() {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const names = ['John', 'Paul', 'George', 'Ringo'];
    const [selectedNames, setSelectedNames] = useState([names[0], names[1]]);

    const memorizadValue = useMemoizedNames({names, selectedNames});

    const clickSumar = () => {
        console.log(memorizadValue.toString());
        setCount(count + 1);
        if (count % 2 === 0) {
            setSelectedNames(['Pepe', 'Maria']);
        } else {
            setSelectedNames([names[0], names[1]]);
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Actualizar Nombres</h1>
            <button onClick={clickSumar} type="button" className="btn btn-success">Actualizar</button>

            <div className="container text-center">
                <div className="row">
                    {
                        memorizadValue.map((name, index) => (
                            <div className="col" key={index}>
                                <h3 id={`nombre-${index}`}>{name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>

            <button onClick={() => setShow(!show)} type="button" className="btn btn-dark">{show ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}