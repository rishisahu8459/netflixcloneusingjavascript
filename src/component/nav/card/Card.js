import React from 'react'
import './Card.css'



export default function Card(props) {

  const imageUrl = `http://image.tmdb.org/t/p/original/${props.poster}`;
  console.log(imageUrl);


  return (
    <div>

      <img className='card_poster' src={imageUrl} alt='poster' />
    </div>
  )
}
