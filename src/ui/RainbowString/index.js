import React from "react";

import "./RainbowString.css";

export default function RainbowString({content = ''}) {
  return (
    <span className="rainbow-string text-center">
      {content.split("").map(char => (
        <span className="rainbow-string__char">{char}</span>
      ))}
    </span>
  );
}
