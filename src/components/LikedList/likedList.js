import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./likedList.css";

const LikedList = () => {
  const likedData = useSelector((state) => state.likedData);

  const [isVisible, setIsVisible] = useState("list-not-visible");

  const handleClick = () => {
    if (isVisible === "list-not-visible") {
      setIsVisible("list-visible");
    } else {
      setIsVisible("list-not-visible");
    }
  };

  const element = likedData.map((item, i) => {
    return (
      <ul key={i} className={isVisible}>
        <li className="likedElement">
          <h1>{item.name}</h1>
          <span>{item.temperament}</span>
          <p>{item.description}</p>
        </li>
      </ul>
    );
  });

  return (
    <div className="likedList">
      <button onClick={handleClick}>Show liked list</button>
      {likedData.length === 0 ? (
        <ul className={isVisible}>
          <li>An empty liked list</li>
        </ul>
      ) : (
        element
      )}
    </div>
  );
};

export default LikedList;
