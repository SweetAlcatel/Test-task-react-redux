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
        <div className={isVisible} key={i}>
          <h1>{item.name}</h1>
          <span>{item.temperament}</span>
          <p>{item.description}</p>
        </div>
    );
  });

  return (
    <div className="likedList">
      <button onClick={handleClick}>Show liked list</button>
      {likedData.length === 0 && isVisible !== 'list-not-visible' ? (
          <span>An empty liked list</span>
      ) : (
        element
      )}
    </div>
  );
};

export default LikedList;
