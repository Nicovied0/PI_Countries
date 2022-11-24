import React from 'react'
import reload from '../../Assets/reload.png'
import style from './Reload.module.css'

const Reload = ({handleOnClick}) => {
  return (
    <button className={style.btn} onClick={handleOnClick}><img className={style.img} alt='reloadbtn' src={reload}></img></button>
  )
}

export default Reload