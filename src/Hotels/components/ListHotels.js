import React from 'react'
import { Card, Columns, Heading } from 'react-bulma-components'

const baseUrl = process.env.REACT_APP_BASE_URL;

const ListHotels = ({ hotels }) => {
    return (
        <Columns>
            {
                hotels.map(hotel => {
                    return (
                        <Columns.Column key={hotel.id} size={4}>
                            <Card>
                                <Card.Image size="16by9" src={`${baseUrl}public/img/hotels/${hotel.image}`} />
                                <Card.Content>
                                    <Heading>{hotel.name}</Heading>
                                    <Heading subtitle size={6}>{hotel.price}</Heading>
                                    <Heading subtitle size={6}>{hotel.stars}</Heading>
                                </Card.Content>
                            </Card>
                        </Columns.Column>
                    )
                })
            }
        </Columns>
    )

}

export default ListHotels