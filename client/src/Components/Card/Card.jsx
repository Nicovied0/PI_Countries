import React from 'react'

const Card = ({name, flag,capital,continent,population}) => {
  return (
    <div className='cardContainer'>
      <h3>{name}</h3>
      <img className= 'cardImg'src={flag} alt='Imagen no encontrada'/>
      <div className='infoConteiner'>
      <h5 className='content'>Capital: {capital}</h5>
      <h5 className='content'>Continente: {continent}</h5>
      <h5 className='content'>Poblacion: {population}</h5> 
      </div>
  </div>
  )
}

export default Card