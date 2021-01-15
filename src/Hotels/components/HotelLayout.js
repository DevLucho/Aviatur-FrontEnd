import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { postHotels, getSearchHotels, createHotel } from '../services';
import { Hotels, Loading, Header, Filters, CheckBox, Input, FormHotel } from './';

const HotelLayout = () => {

    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function loadHotels(data, n) {
        try {
            const response = n === 1 ? await getSearchHotels(data) : await postHotels(data);
            if (response.status === 200) {
                setHotels(response.data.data);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    // Buscador
    const search = (data) => {
        loadHotels(data, 1);
    }

    // Filtrar por estrellas
    const starFilters = (filters) => {
        loadHotels(filters, 2);
    }

    // Despues de renderizar se ejecuta
    useEffect(() => {
        loadHotels();
    }, []) //-> [] para ejecutar solo la primera vez.

    const handleSubmit = async (data) => {
        await createHotel(data);
        handleClose();
    }

    return (
        <>
            <Header />
            <div className="container-fluid pt-2">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h4 id="txtFiltrar" className="text-black-50">Filtros</h4>
                        <Filters
                            input={<Input searchTerm={data => search(data)} />}
                            checked={<CheckBox handleFilters={filters => starFilters(filters)} />}
                        />
                        <div className="col-12 d-flex justify-content-center p-2">
                            <Button className="btn btn-block" style={{ backgroundColor: '#0E47A1' }} onClick={handleShow}>
                                Crear hotel.
                            </Button>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Crear hotel</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <FormHotel handleSubmit={handleSubmit} />
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="col-12 col-md-9">
                        {isLoading && <Loading />}
                        {
                            !isLoading && !hotels.length && (
                                <h2 className="d-flex justify-content-center m-5">No hay hoteles que concuerden con los filtros.</h2>
                            )
                        }
                        {
                            !isLoading && hotels.length !== 0 && (
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
