import React from 'react'
import { publicAmenities } from '../services'

const baseUrl = process.env.REACT_APP_BASE_URL;

const Amenities = () => {


    //metodo para extraer el nombre de los amenities.
    async function allAmenities() {

        const response = await publicAmenities();
        let arrAmenities = response.data;
        let arr = [];
        for (let i = 0; i < arrAmenities.length; i++) {
            if (arrAmenities[i].endsWith(".svg")) {
                arr.push(arrAmenities[i].substring(0, arrAmenities[i].lastIndexOf(".svg")));
            }
        }

        return arr;
    }

    return (
        <>
            {
                allAmenities().then( (value) => {
                    value.map(service => {
                        console.log(service);
                    })
                }, (reason) => {
                    console.log(reason);
                })
                    // value.map( (val, i) => {
                        // <div className="form-check" key={i}>
                        //     <input
                        //         className="form-check-input"
                        //         type="checkbox"
                        //         id="flexCheckDefault"
                        //     />
                        //     <label className="form-check-label" htmlFor="flexCheckDefault">
                        //         <img
                        //             key={i}
                        //             src={`${baseUrl}public/ico/amenities/${val}.svg`}
                        //             alt={`${val}`}
                        //             style={{ width: 25, height: 15 }}
                        //         />
                        //     </label>
                        // </div>
                        // console.log(val,i);
                //         <p>{val}</p>
                //     })
                // }, function (reason) {
                //     console.log(reason);
                // })
            }
        </>
    )
}

export default Amenities
