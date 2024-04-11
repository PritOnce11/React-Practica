import { useMemo } from 'react';

interface CounterState {
    names: string[];
    selectedNames: string[];
}

export const useMemoizedNames =  ({ names, selectedNames }: CounterState) => {
    return useMemo(() => {
        const actualizacionNombres = [...names];
        actualizacionNombres[0] = selectedNames[0];
        actualizacionNombres[1] = selectedNames[1];
        return actualizacionNombres;
    }, [selectedNames]);
};
