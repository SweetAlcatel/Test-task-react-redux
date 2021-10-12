import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './likedList.css';

const LikedList = () => {

    const likedData = useSelector(state => state.likedData);

    console.log(likedData);

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(!isVisible)
    };

    const Classes = classNames(!isVisible && 'list');

    const element = likedData.map((item, i) => {
        return (
            <ul key={i}>
                <li className='likedElement'>
                    <h1>{item.name}</h1>
                    <span>{item.temperament}</span>
                    <p>{item.description}</p>
                </li>
            </ul>
        );
    })

    return (
        <div className='likedList'>
            <button onClick={handleClick}>Show liked list</button>
            {likedData.length === 0 && !isVisible ? <ul className={Classes}><li>An empty liked list</li></ul> : element}
        </div>
    );
};

export default LikedList;