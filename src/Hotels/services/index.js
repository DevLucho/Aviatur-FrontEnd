import axios from 'axios';
import Swal from 'sweetalert2'

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function createHotel(hotelData) {
    try {
        const formData = new FormData();

        formData.append('name', hotelData.name);
        formData.append('stars', hotelData.stars);
        formData.append('price', hotelData.price);
        formData.append('image', hotelData.image);
        formData.append('amenities', hotelData.amenities);

        const response = await axios({
            url: `${baseUrl}api/hotels/create`,
            method: 'POST',
            data: formData
        });

        if (response.status) {
            Swal.fire(response.data.message, '', 'success');
        } else {
            Swal.fire(response.data.message, '', 'error');
        }

    } catch (error) {
        console.error(error);
    }
}

export async function findByIdHotel(idHotel) {
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels/hotel-id/${idHotel}`
        });
        // if (response.status) {
        //     Swal.fire(response.data.message, '', 'error');
        // }
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getHotels() {
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels`
        });
        // if (!response.status) {
        //     Swal.fire(response.data.message, '', 'error');
        // }
        return response;
    } catch (error) {
        console.error(error);
    }
}

export function deleteHotel(idHotel) {
    try {

        Swal.fire({
            title: '¿Desea eliminar el hotel?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                axios({
                    url: `${baseUrl}api/hotels/${idHotel}`,
                    method: 'DELETE'
                }).then(function(value){
                    if (value.status) {
                        getHotels()
                        Swal.fire(value.data.message, '', 'success');
                    } else {
                        Swal.fire(value.data.message, '', 'error');
                    }
                }, function(reason){
                    console.log(reason);
                })
            }
        })
    } catch (error) {
        console.error(error);
    }
}


export async function publicAmenities() {
    try {
        const response = await axios({
            url: `${baseUrl}public/amenities`
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

// filtrar por estrellas
export async function postHotels(starsData) {
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels`,
            method: 'POST',
            data: starsData
        });
        // if (!response.status) {
        //     Swal.fire(response.data.message, '', 'error');
        // }
        return response
    } catch (error) {
        console.error(error);
    }
}

// filtrar por nombre de hotel
export async function getSearchHotels(filter) {
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels/${filter}`
        })
        // if (!response.status) {
        //     Swal.fire(response.data.message, '', 'error');
        // }
        return response
    } catch (error) {
        console.log(error)
    }
}