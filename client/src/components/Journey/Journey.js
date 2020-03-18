import React from 'react';
import './Journey.css';

const Journey = ({ journey, setCurrentJourney }) => {
  return (
    <button className='Journey' onClick={() => {
      setCurrentJourney(journey)
    }
    }>
      <h1>{journey.title}</h1>
    </button>
  )
}

export default Journey