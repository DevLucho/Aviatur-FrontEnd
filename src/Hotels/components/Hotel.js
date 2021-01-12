import React, { Component } from 'react';
import { Card, Heading, Image } from 'react-bulma-components';

const baseUrl = process.env.REACT_APP_BASE_URL;
class Hotel extends Component {

    render() {
        const { hotel } = this.props;
        return (
            <Card>
                <Card.Image size="16by9" src={`${baseUrl}public/img/hotels/${hotel.image}`} />
                <Card.Content>
                    <Heading>{hotel.name}</Heading>
                    <Heading subtitle size={6}>{this.convert(hotel.price)}</Heading>
                    <Heading>
                        <figure className="image is-64x64 columns" >
                            {this.stars(hotel.stars)}
                        </figure>
                    </Heading>
                    <Heading>
                        <figure className="image is-64x64 columns">
                            {this.amenities(hotel.amenities)}
                        </figure>
                    </Heading>

                </Card.Content>
            </Card>
        )
    }

    stars(number) {

        const uriStar = `${baseUrl}public/ico/filters/star.svg`;
        let starSvg = []; // estrellas del hotel
        for (let i = 0; i < number; i++) {
            starSvg.push((
                <Image key={i} src={uriStar} />
            ))
        }

        return (
            starSvg.map(function (ico, i) {
                return ico;
            })
        )
    }


    amenities(service) {

        let serviceSvg = []; // amenitites

        for (let i = 0; i < service.length; i++) {
            console.log(i + 1, `${baseUrl}public/ico/amenities/${service[i]}.svg`)
            serviceSvg.push((
                <Image key={i} src={`${baseUrl}public/ico/amenities/${service[i]}.svg`} />
            ))
        }

        return (
            serviceSvg.map(function (ico, i) {
                return ico;
            })
        )
    }

    // convertir a pesos argentinos
    convert(price) {

        if (isNaN(price)) {
            return console.error('Not a number');
        }
                
        let result = Math.round(price).toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        })

        return result;
    }

}

export default Hotel;