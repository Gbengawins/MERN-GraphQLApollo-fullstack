import React from 'react';

const Movie = (props) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={ props.image } alt='movie' width='100%' height='270px' />
        <div className='card-body'>
          <h3>{ props.title }</h3>
          <h5>{ props.genre } - { props.year }</h5>
          <div className='card-description overlay'>
            <p className='text'>{ props.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;