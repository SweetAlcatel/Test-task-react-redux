import React, { useState } from 'react';
import { likeElement, deleteElement, unLikeElement } from '../Actions/actions';
import { useDispatch } from 'react-redux';
import Styles from './breed.module.css';

export const Breed = ({ id, name, temperament, description }) => {

    const[like, setLike] = useState(false);
    const dispatch = useDispatch();

    const option = (id) => {
        if(like === false) {
            dispatch(likeElement(id))
            setLike(true)
        } else {
            dispatch(unLikeElement(id))
            setLike(false)
        };
    };

    return (
        <div className={Styles.catAndFacts}>
            <h1>{name}</h1> 
            <span>{temperament}</span>
            <p>{description}</p>
            <div className={Styles.buttons}>
                <button id={id} className={Styles.actionLike} onClick={() => option(id)}>Like</button>
                <button id={id} className={Styles.actionDelete} onClick={() => dispatch(deleteElement(id))}>Delete</button>
            </div>
        </div>
    );
};


