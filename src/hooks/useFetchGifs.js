import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => { //Los hooks no pueden ser async 
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            } ); // el then hace que las funciones se ejecuten con el primer argumento que llega la promise
    }, [ category ])
    return state;
}






