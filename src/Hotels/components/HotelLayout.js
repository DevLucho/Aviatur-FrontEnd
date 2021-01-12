import React, { useState, useEffect } from 'react'
import { Container } from 'react-bulma-components'
import { getHotels } from '../services';
import { Hotels, Loading } from './';

const HotelLayout = () => {

    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    async function loadHotels() {
        const response = await getHotels();
        if (response.status === 200) {
            setHotels(response.data.data);
        }
        setIsLoading(false);
    }

    // Despues de renderizar se ejecuta
    useEffect(() => {
        loadHotels();
    }, []) //-> [] para ejecutar solo la primera vez.

    return (
        <Container>
            {
                isLoading && <Loading />
            }
            {
                !isLoading && !hotels.length && (
                    <h2 className="title has-text-centered">No hay hoteles.</h2>
                )
            }
            {
                !isLoading && hotels.length && (
                    <Hotels hotels={hotels} />
                )
            }

        </Container>
    );

}

export default HotelLayout;
