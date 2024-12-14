// Un hook no es mas que una funcion que retorna un objeto o un arreglo
// con la informacion que queremos utilizar en nuestra aplicacion
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}