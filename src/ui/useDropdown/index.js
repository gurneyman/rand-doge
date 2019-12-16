import React, { useState } from "react";

import './Dropdown.css';

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <div className="vertical-rhythm--s">
      <label htmlFor={id}>{label}</label>
      <div className="select-container">
        <select
          id={id}
          value={state}
          onChange={e => updateState(e.target.value)}
          onBlur={e => updateState(e.target.value)}
          disabled={!options.length}
        >
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
