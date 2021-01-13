import React from 'react';

const Header = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const logo = `${baseUrl}public/img/logo-aviatur.svg`;
    return (

        <header className="navbar" style={{backgroundColor: '#0E47A1'}} >
            <div className="container-fluid">
                <a id="logo" className="navbar-brand" href="/">
                    <img src={logo} alt="aviatur-logo" style={{width: '170px', height: 28}}  />
                </a>
            </div>
        </header>

    )
}

export default Header;