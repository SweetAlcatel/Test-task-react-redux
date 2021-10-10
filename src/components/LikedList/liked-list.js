import React, { Fragment, useState } from 'react';
import './liked-list.css';

const LikedList = () => {

    const stateClassName = {
        none: 'list-none',
        visible: 'list-visible'
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

    return (
        <div className='liked-list'>
            <button onClick={handleClick}>Show liked list</button>
            <ul className={classNamez}>
                <li className='liked-element'>
                    <h1>Aegean</h1> 
                    <span>Affectionate, Social, Intelligent, Playful, Active</span>
                    <p>Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.</p>
                </li>
            </ul>
        </div>
    );
};

export default LikedList;