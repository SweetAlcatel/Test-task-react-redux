import React, { useEffect } from "react";
import Styles from "./app.module.css";
import { Breed } from "../Breed/breed";
import LikedList from "../LikedList/likedList";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Actions/actions";

export const App = () => {
  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className={Styles.app}>
      <LikedList />
      {data.map((item, i) => {
        return <Breed key={i} {...item}/>
      })}
    </div>
  );
};


