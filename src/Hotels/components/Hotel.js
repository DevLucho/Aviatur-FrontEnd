import React, { Component } from 'react';

const baseUrl = process.env.REACT_APP_BASE_URL;
class Hotel extends Component {

    render() {
        const { hotel } = this.props;
        return (

            <div className="col-12 card mb-3 pt-4 pb-4 ps-4 pe-4">
                <div className="row g-0">
                    <div id="card-img" className="col-12 col-md-4">
                        <img src={`${baseUrl}public/img/hotels/${hotel.image}`} alt={`Foto de ${hotel.name}`} style={{ width: '100%' }} />
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="card-body p-0">
                            <strong><h5 className="card-title" style={{ color: '#3B6BC5' }}>{hotel.name}</h5></strong>
                            <picture className="card-text">{Hotel.stars(hotel.stars)}</picture>
                            <p className="card-text"><small className="text-muted">{this.amenities(hotel.amenities)}</small></p>
                        </div>
                    </div>
                    <div id="card" className="col-12 col-md-3">
                        <div className="card text-center border-0">
                            <div className="card-body">
                                <p className="card-title text-black-50">Precio por noche por habitación</p>
                                <p className="card-text" style={{ fontSize: '1.5rem', color: 'orange' }}>ARS&nbsp;<strong>{this.convert(hotel.price)}</strong></p>
                            </div>
                            <a href="/" className="card-title btn btn-block" style={{ margin: '0 1rem 1rem',backgroundColor: '#0E47A1', color: 'white', textTransform: 'uppercase' }} >Ver hotel</a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

    static stars(number) {

        const uriStar = `${baseUrl}public/ico/filters/star.svg`;
        let starSvg = []; // stars of the hotel
        for (let i = 0; i < number; i++) {
            starSvg.push((
                <img key={i} src={uriStar} alt={`Star ${i + 1}`} style={{ width: 20, height: 15 }} />
            ))
        }

        return (
            starSvg.map(function (ico, i) {
                return ico;
            })
        )
    }


    amenities(service) {

        let serviceSvg = []; // amenitites of the hotel

        for (let i = 0; i < service.length; i++) {
            serviceSvg.push((
                <img 
                    key={i} 
                    src={`${baseUrl}public/ico/amenities/${service[i]}.svg`} 
                    alt={`${service[i]}`} 
                    style={{ width: 25, height: 15 }} 
                />
            ))
        }

        return (
            serviceSvg.map(function (ico, i) {
                return ico;
            })
        )
    }

    // convert to format money
    convert(price) {

        if (isNaN(price)) {
            return console.error('Not a number');
        }

        let result = Math.round(price).toLocaleString('en-EN', {
            minimumFractionDigits: 0
        })

        return result;
    }

}

export default Hotel;