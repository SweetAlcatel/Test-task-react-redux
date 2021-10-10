import React from 'react';
import './breed.css';

const Breed = ({ name, temperament, description }) => {
    return (
        <li className='cat-and-facts'>
            <h1>{name}</h1> 
            <span>{temperament}</span>
            <p>{description}</p>
        </li>
    );
};

export default Breed;