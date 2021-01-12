import React, { Component } from 'react'
import Hotel from './Hotel'
import { Columns} from 'react-bulma-components'
import PropTypes from 'prop-types';


class Hotels extends Component {
    render() {
        return (
            <Columns>
                {
                    this.props.hotels.map((e) =>
                        <Columns.Column size={4} key={e.id}>
                            <Hotel hotel={e} />
                        </Columns.Column>
                    )
                }
            </Columns>
        )
    }
}

Hotels.propTypes = {
    hotels: PropTypes.array.isRequired
}

export default Hotels;