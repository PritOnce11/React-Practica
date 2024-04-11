import { useSelector } from "react-redux";
import { useGetRickMortyByPageQuery } from "../../apis/RickMortyApi";
import { RootState } from "../../store/store";
import Buttons from "../Buttons";
import { Titles } from "../../css/StylesPage";
import { Global } from "@emotion/react";


export default function RickMorty() {
    const count = useSelector((state: RootState) => state.counter.value);

    const { data, error, isLoading } = useGetRickMortyByPageQuery(count);

    return (
        <>
        <Global styles={{ body:{background:"black"} }}/>
        
            {
                error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <Titles>RICK AND MORTY</Titles>
                        <div className='d-flex flex-wrap justify-content-center'>
                            {data.results.map((rickMorty, index) => (
                                <div className='card m-2' style={{ width: '18rem' }} key={index}>
                                    <div className='card-body'>
                                        <p className='card-text'>{rickMorty.name}</p>
                                    </div>
                                    <img src={rickMorty.image} alt="IMG" className='card-img-top' />
                                </div>
                            ))}
                        </div>
                    </>
                ) : null
            }
            <Buttons/>
        </>
    )
}