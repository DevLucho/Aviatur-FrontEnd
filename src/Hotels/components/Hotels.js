import React, { Component } from 'react'
import Hotel from './Hotel'
import PropTypes from 'prop-types';


class Hotels extends Component {
    render() {
        return (
            <div className="">
                {
                    this.props.hotels.map((e) =>
                        <div key={e.id}>
                            <Hotel hotel={e} />
                        </div>
                    )
                }
            </div>
        )
    }
}

Hotels.propTypes = {
    hotels: PropTypes.array.isRequired
}

export default Hotels;