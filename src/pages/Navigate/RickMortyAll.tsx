//import { useSelector } from 'react-redux';

// import { useGetAllRickMortyQuery } from '../store/apis/RickMortyApi'
import usePepito from '../../Hooks/usePepito';
import { Global } from '@emotion/react';
import { Titles } from '../../css/StylesPage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
// import LazyLoad from 'react-lazyload';
//import { RootState } from '../store/store';
//import Buttons from './Buttons';

interface RickMortyData {
    name: string;
    image: string;
}

export default function RickMortyAll() {

    //const count = useSelector((state: RootState) => state.counter.value)


    const { data, isLoading } = usePepito()

    console.log(isLoading)
    return (
        <>
            <Global styles={{ body: { background: "black" } }} />


            {!isLoading ? (
                <h4>Loading...</h4>
            ) : data ? (
                <>
                    <Titles>RICK AND MORTY ALL</Titles>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {data.map((rickMorty: RickMortyData, index: number) => (
                            <div className="card" style={{ width: '18rem' }} key={index}>
                                <div className="card-body">
                                    <p className="card-text">{rickMorty.name}</p>
                                </div>
                                    <LazyLoadImage
                                    src={rickMorty.image}
                                    className="card-img-top"
                                    />
                            </div>
                        ))}
                    </div>
                </>

            ) : null}

        </>
    )
}