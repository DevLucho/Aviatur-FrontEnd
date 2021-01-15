import React, { Component, Fragment } from 'react'
import { Hotel } from './'
import PropTypes from 'prop-types';


class Hotels extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.hotels.map((e) =>
                        <div key={e._id}>
                            <Hotel hotel={e} />
                        </div>
                    )
                }
            </Fragment>
        )
    }
}

Hotels.propTypes = {
    hotels: PropTypes.array.isRequired
}

export default Hotels;