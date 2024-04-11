import { useEffect, useState } from "react";
import { useGetAllRickMortyQuery } from "../apis/RickMortyAllApi";



export default function usePepito() {

    const [list, setList] = useState<any>([]);
    const [count, setCount] = useState(0);
    const { data, isLoading } = useGetAllRickMortyQuery(count)


    useEffect(() => {

        if (data !== undefined && !isLoading) {
            setList(list.concat(data.results))
        }
    }, [isLoading, data])


    useEffect(() => {
        if (count < 10) {
            setCount(count + 1)
        }
    }, [list])


    return { data: list, isLoading: count === 10 }

}