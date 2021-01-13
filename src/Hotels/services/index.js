import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getHotels(){
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels`
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

// filtrar por estrellas
export async function postHotels(starsData) {
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels`,
            method: 'POST',
            data: starsData
        })

        return response
    } catch (error) {
        console.error(error);
    }
}

// filtrar por nombre de hotel
export async function getSearchHotels(filter){
    try {
        const response = await axios({
            url: `${baseUrl}api/hotels/${filter}`
        })
        
        return response
    } catch (error) {
        console.log(error)   
    }
}