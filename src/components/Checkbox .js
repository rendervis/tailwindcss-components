import React, { useState, useEffect } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const classes = {
    defaultCheckbox: `w-3.5 h-3.5 m-0.5 outline-border inline-block relative`,
    checked: (isChecked) =>
      isChecked
        ? `flex relative outline-checked bg-tickFillSelected items-center justify-center
           hover:bg-tickFillSelectedHover
        `
        : null,
  };

  useEffect(() => {
    setIsChecked(props.checked);
  }, [props.checked]);

  return (
    <div className="h-6 w-64 flex flex-row">
      <label for={`${props.id}`} className="flex items-center cursor-pointer">
        <div
          className={`
          ${classes.defaultCheckbox} 
          ${classes.checked(isChecked)}
          `}
        >
          <input
            type="checkbox"
            className={`visibility: hidden absolute block`}
            id={`${props.id}`}
            name={`${props.name}`}
            onChange={props.onChange}
          />
          {/* show check mark */}
          {isChecked && (
            <svg
              className={`absolute block z-20  h-5 w-5 stroke-tickMarkFill`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="tickMarkFill"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
        </div>
        <span className={`pl-2`}>{props.children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
