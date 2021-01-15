import React, { useState } from 'react'
import { Hotel } from './'


function StarsCheck() {
    let arr_stars = [];
    for (let i = 0; i <= 5; i++) {
        i === 0
            ? arr_stars.push({ "_id": i, "cantStar": 'Todas las estrellas' })
            : arr_stars.push({ "_id": i, "cantStar": i })
    }
    return arr_stars;
}

function CheckBox(props) {

    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {
        
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        props.handleFilters(newChecked)
    }

    return (
        <>
            {
                StarsCheck().map((value, i) => (

                    <div className="form-check" key={i}>
                        <input
                            onChange={()=>handleToggle(value._id)}
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={ Checked.indexOf(value._id) === -1 ? false : true }
                        />
                        <label className="form-check-label"  htmlFor="flexCheckDefault">
                            {
                                isNaN(value.cantStar)
                                    ? value.cantStar
                                    : Hotel.stars(value.cantStar)
                            }
                        </label>
                    </div>
                ))
            }
        </>


    )
}

export default CheckBox
