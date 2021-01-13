import React, { useState, useEffect } from 'react'
import { postHotels } from '../services';
import { Hotels, Loading, Header, Filters, CheckBox } from './';

const HotelLayout = () => {

    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    async function loadHotels(arr) {
        const response = await postHotels(arr);
        if (response.status === 200) {
            setHotels(response.data);
        }
        setIsLoading(false);
    }

    // Filtrar por estrellas
    const starFilters = (filters) => {
        console.log(filters);
        loadHotels(filters);
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
                        <h4 id="txtFiltrar" className="text-black-50">Filtros</h4>
                        <Filters  
                            checked={<CheckBox handleFilters={filters => starFilters(filters)}/>} 
                        />
                    </div>
                    <div className="col-12 col-md-9">
                        { isLoading && <Loading /> }
                        {
                            !isLoading && !hotels.length && (
                                <h2 className="d-flex justify-content-center m-5">No hay hoteles filtrados.</h2>
                            )
                        }
                        {
                            !isLoading && hotels.length!==0 && (
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
