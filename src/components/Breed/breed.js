import React from 'react';
import { likeElement, deleteElement } from '../Actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Styles from './breed.module.css';

export const Breed = ({ id, name, temperament, description }) => {

    const dispatch = useDispatch();
    
        return (
            <li className={Styles.catAndFacts}>
                <h1>{name}</h1> 
                <span>{temperament}</span>
                <p>{description}</p>
                <button id={id} className={Styles.actionLike} onClick={() => dispatch(likeElement(id))}>Like</button>
                <button id={id} className={Styles.actionDelete} onClick={() => dispatch(deleteElement(id))}>Delete</button>
            </li>
        );
};


