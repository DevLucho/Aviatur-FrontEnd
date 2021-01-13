import React, { Component } from 'react';

const baseUrl = process.env.REACT_APP_BASE_URL;
const uriSearch = `${baseUrl}public/ico/filters/search.svg`;
const uriStar = `${baseUrl}public/ico/filters/star.svg`;
const uriFilter = `${baseUrl}public/ico/filters/filter.svg`;
const uriBed = `${baseUrl}public/ico/filters/single-bed.svg`;

class Filters extends Component {

    render() {
        return (
            <div className="col-12">

                <nav className="navbar navbar-expand-md">
                    <button type="button" className="shadow-sm p-3 mb-3 bg-white rounded col-12 navbar-toggler btn text-start p-3" style={{ backgroundColor: 'white' }} data-toggle="collapse" data-target="#navbarCollapse">
                        <h6 className="m-0" style={{ color: '#3B6BC5' }}>
                            <img src={uriFilter} alt="icon-filter" style={{ width: 22 }} />
                            &nbsp;&nbsp;&nbsp;Filtrar
                        </h6>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav col-12">
                            <div className="card col-12">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <img src={uriSearch} alt="icon-search" style={{ width: 20 }} />
                                        &nbsp;&nbsp;&nbsp;Nombre del hotel
                                    </li>
                                    <li className="list-group-item pt-5 pb-5">
                                        <div className="row">

                                            <div className="col-1 col-md-2">
                                                <img src={uriBed} alt="icon-bed" style={{ width: 25 }} />
                                            </div>
                                            <div className="col-11 col-md-10 padding-s">
                                               {this.props.input}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <img src={uriStar} alt="icon-star" style={{ width: 20 }} />
                                        &nbsp;&nbsp;&nbsp;Estrellas
                                    </li>
                                    <li className="list-group-item pt-4 pb-5">
                                        {this.props.checked}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Filters;