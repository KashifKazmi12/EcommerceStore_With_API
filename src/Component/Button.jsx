import React, { useState } from 'react'
import "../style/button.css"

export const Button = (props) => {
  const [animate, setAnimate] = useState(false);

  const animateButton = () => {
    // Reset animation
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 700);
  };
      return (
        <button className={`bubbly-button ${animate ? 'animate' : ''}`} onClick={animateButton}>{props.text}</button>
      );
}
