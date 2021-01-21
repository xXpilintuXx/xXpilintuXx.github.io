import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'


// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );
    


    // useEffect( ()=> {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs))
    // }, [ category ])

    
    // getGifs();
    return (
        <>
            <h3>{category}</h3>
        { loading && <p>Loading</p>}
        <div className="row">
                { images.map( img => 
                <GifGridItem 
                
                key= {img.id}
                { ...img }
                />
                )}
        </div>
        </>
    )
}
