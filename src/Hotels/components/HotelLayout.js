import React, { useState, useEffect } from 'react'
import { getHotels } from '../services';
import { Hotels, Loading, Header, Filters } from './';

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
        <>
            <Header />
            <div className="container-fluid pt-2">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h4 className="text-black-50">Filtros</h4>
                        <Filters />
                    </div>
                    <div className="col-12 col-md-9">
                        {
                            isLoading && <Loading />
                        }
                        {
                            !isLoading && !hotels.length && (
                                <h2 className="d-flex justify-content-center m-5">No hay hoteles.</h2>
                            )
                        }
                        {
                            !isLoading && hotels.length && (
                                <Hotels hotels={hotels} />
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    );

}

export default HotelLayout;
