import React, { useState, useEffect } from "react";

const Button = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const selected = isSelected ? "focus:bg-primaryHover" : null;
  const disabled = isDisabled
    ? "bg-disableFill text:disableText pointer-events-none"
    : null;

  useEffect(() => {
    setIsLoading(props.isLoading);
    setIsSelected(props.isSelected);
    setIsDisabled(props.isDisabled);
  }, [props.isLoading, props.isSelected, props.isDisabled]);

  return (
    <button
      color="accent"
      className={`bg-primaryFill text-primaryText hover:bg-primaryHover px-4 py-3.5 ${selected} ${disabled}`}
      onClick={props.onClick}
      {...props}
    >
      {isLoading ? <span>Loading</span> : props.children}
    </button>
  );
};

export default Button;
