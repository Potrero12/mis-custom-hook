import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const IsMounted = useRef(true);

    const [ state, setState ] = useState( {data: null, loading: true, error: null} );

    useEffect(() => {
        return () => {
            IsMounted.current = false;
        }
    }, []);

    useEffect( () => {


        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {

                if( IsMounted.current ){
                    setTimeout(() => {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }, 4000);
                }
            });
    },[url])

    return state;

}
