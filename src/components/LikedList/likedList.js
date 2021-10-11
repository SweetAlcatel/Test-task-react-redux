import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './likedList.css';

const LikedList = () => {

    const likedData = useSelector(state => state.likedData);

    console.log(likedData);

    const stateClassName ={
        none: 'listNone',
        visible: 'listVisible'
    };

    const [classNamez, setClassNamez] = useState(stateClassName.none);

    const handleClick = () => {
        const { none, visible } = stateClassName
        if (classNamez === none) {
            setClassNamez(visible)
        }
        if (classNamez == visible) {
            setClassNamez(none)
        }
    }

    const element = likedData.map((item) => {
        return (
            <div className=''>
                <h1>{item.name}</h1>
                <span>{item.temperament}</span>
                <p>{item.description}</p>
            </div>
        );
    });

    return (
        <div className='likedList'>
            <button onClick={handleClick}>Show liked list</button>
            <ul className={classNamez}>
                {
                    likedData.map((item, i) => {
                        return (
                            <li key={i} className='likedElement'>
                                <h1>{item.name}</h1>
                                <span>{item.temperament}</span>
                                <p>{item.description}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default LikedList;