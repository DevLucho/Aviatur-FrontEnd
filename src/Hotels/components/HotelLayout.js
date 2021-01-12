import React, { useState, useEffect } from 'react'
import { Container } from 'react-bulma-components'
import { getHotels } from '../services';
import { ListHotels } from './';

const HotelLayout = () => {

    const [hotels, setHotels] = useState([]);

    async function loadHotels() {
        const response = await getHotels();
        if (response.status === 200) {
            setHotels(response.data.data);
        }
    }

    // Despues de renderizar se ejecuta
    useEffect(() => {
        loadHotels();
    }, []) //-> [] para ejecutar solo la primera vez.

    return (
        <Container>
            <ListHotels hotels={hotels} />
        </Container>
    );

}

export default HotelLayout;
