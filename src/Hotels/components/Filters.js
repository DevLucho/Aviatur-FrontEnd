import React, { Component } from 'react';

const baseUrl = process.env.REACT_APP_BASE_URL;
const uriSearch = `${baseUrl}public/ico/filters/search.svg`;
const uriStar = `${baseUrl}public/ico/filters/star.svg`;
class Filters extends Component {
    render() {
        return (
            <div className="col-12">

                <nav className="navbar navbar-expand-md navbar-white bg-white">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                        Filtrar
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <img src={uriSearch} alt="icon-search" style={{ width: 20 }} />
                                        &nbsp;&nbsp;&nbsp;Nombre del hotel
                                    </li>
                                    <li className="list-group-item pt-5 pb-5">
                                        Buscador
                                    </li>
                                    <li className="list-group-item">
                                        <img src={uriStar} alt="icon-star" style={{ width: 20 }} />
                                        &nbsp;&nbsp;&nbsp;Estrellas
                                    </li>
                                    <li className="list-group-item pt-5 pb-5">
                                        Checkeds
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