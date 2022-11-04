import React from "react";
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div class={style.container}>
      <div class={style.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};


export default Loader;
