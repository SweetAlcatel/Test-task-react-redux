import React from 'react';
import { likeElement } from '../Actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Styles from './breed.module.css';

export const Breed = ({ id, name, temperament, description }) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const likedData = useSelector(state => state.likedData);

    return (
        <li className={Styles.catAndFacts}>
            <h1>{name}</h1> 
            <span>{temperament}</span>
            <p>{description}</p>
            <button id={id} className={Styles.actionLike} onClick={() => dispatch(likeElement(id))}>Like</button>
        </li>
    );
};


