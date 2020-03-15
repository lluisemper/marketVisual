import React from 'react';
import './EmotionsDisplay.css';

const EmotionsDisplay = ({ arrayEmotions }) => {
  return (
    <div className="EmotionsDisplay">
      <h3>{arrayEmotions.length
        ? arrayEmotions.map(el => <h4>{ el.count + '.-' + el.inputChart + ': ' + el.inputEmotions + '-----------'} </h4>)
        : null}
      </h3>
    </div>
  );
}

export default EmotionsDisplay;
