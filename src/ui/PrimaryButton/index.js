import React from "react";

import './PrimaryButton.css';

export default function PrimaryButton({label, disabled}) {
  return (
    <button className="primary-button" disabled={disabled}>{label}</button>
  );
}
