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

    const element = likedData.map((item, i) => {
        return (
            <ul key={i} className={classNamez}>
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
            {likedData.length === 0 ? <ul className={classNamez}><li>An empty liked list</li></ul>: element}
        </div>
    );
};

export default LikedList;