import React, { useState, useRef, useEffect} from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

interface item {
    
}

interface ExpectetedData {
    fields:item[],
    isDelta: boolean,
    children: JSX.Element,
    callback: (data: (arg1: item[]) => item[]) => void
}

export default function DeltaForm(datos: ExpectetedData) {

    const {register, handleSubmit} = useForm();

    const originalData = useRef(datos.fields);

    function onSubmit(data:item[]) {
        if(!datos.isDelta) {
            datos.callback(data);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {datos.children}
        </form>
    )
}