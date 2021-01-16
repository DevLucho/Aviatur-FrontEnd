import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { Amenities } from './';


const FormHotel = ({ handleSubmit }) => {

    const [formValues, setFormValues] = useState({
        name: '',
        stars: '',
        price: '',
        amenities: []
    });

    const inputFileRef = useRef()

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setFormValues({ ...formValues, [name]: value })
    }

    const _handleSubmit = (e) => {
        e.preventDefault() // prevenir comportamiento nativo del navegador
        handleSubmit({ ...formValues, image: inputFileRef.current.files[0] })
        console.log(formValues)
        console.log(inputFileRef.current.files);
    }

    return (
        <Form onSubmit={_handleSubmit}>
            <div className="row">
                <Form.Group className="col-12" controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        placeholder="Nombre del hotel"
                        type="text"
                        name="name"
                        required
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="col-12 col-md-6" controlId="formGridPassword">
                    <Form.Label>Estrellas</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Estrellas"
                        name="stars"
                        required
                        value={formValues.stars}
                        onChange={handleChange} />
                </Form.Group>
            
                <Form.Group className="col-12 col-md-6" controlId="formGridPrice">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Precio"
                        name="price"
                        required
                        value={formValues.price}
                        onChange={handleChange} />
                </Form.Group>

                
                {/* <Form.Group as={Col} controlId="formGridAmenities">
                    <Form.Label>Servicios</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Servicio"
                        name="amenities"
                        value={formValues.amenities}
                        onChange={handleChange} />
                </Form.Group> */}

                {/* <Amenities/> */}
                <Form.Group className="col-12" controlId="formGridImg">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" ref={inputFileRef} />
                    </Form.Group>
                </Form.Group>
            </div>
            <hr />
            <Button className="col-12 btn btn-block" style={{backgroundColor: '#0E47A1'}} type="submit">
                Guardar
            </Button>
        </Form>
    )
}

export default FormHotel