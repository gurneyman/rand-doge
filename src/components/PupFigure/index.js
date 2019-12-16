import React from "react";

import RainbowString from '../../ui/RainbowString';
import './PupFigure.css';

const PUP_STRING = "We ❤ our pups";

export default function PupFigure({dogUrl, breed}) {
  if(!dogUrl) {
    return <div>Loading...</div>
  }
  return (
    <figure className="pup-figure">
      <h2 className="pup-figure__banner text-center"><RainbowString content={PUP_STRING} /></h2>
      <img src={dogUrl} alt={`Random ${breed} pic`} />
    </figure>
  );
}


