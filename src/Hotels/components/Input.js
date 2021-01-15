import React, { useState } from 'react'

function Input(props) {

    const [searchTerm, setsearchTerm] = useState('');

    const handleSearch = (value) => {
        setsearchTerm(value);
        props.searchTerm(searchTerm);
    }

    return (
        <input
            type="text"
            placeholder="Hotel"
            className="search form-control-plaintext border-2 border-bottom pb-2"
            onChange={e => handleSearch(e.target.value)}
            autoFocus
        />
    )
}

export default Input
