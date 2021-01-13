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

