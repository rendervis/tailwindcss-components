import React, { useState, useEffect } from "react";

const Button = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const classes = {
    buttonPrimary:
      "inline-block min-w-min bg-primaryFill text-primaryText hover:bg-primaryHover px-4 py-3.5",
    selected: (isSelected) => (isSelected ? "focus:bg-primaryHover" : null),
    disabled: (isDisabled) =>
      isDisabled ? "bg-disableFill text:disableText pointer-events-none" : null,
  };

  useEffect(() => {
    setIsLoading(props.isLoading);
    setIsSelected(props.isSelected);
    setIsDisabled(props.isDisabled);
  }, [props.isLoading, props.isSelected, props.isDisabled]);

  return (
    <button
      className={`
       ${classes.buttonPrimary}
       ${classes.selected(isSelected)}
       ${classes.disabled(isDisabled)} 
     `}
      onClick={props.onClick}
      {...props}
    >
      {isLoading ? <span>Loading</span> : props.children}
    </button>
  );
};

export default Button;
