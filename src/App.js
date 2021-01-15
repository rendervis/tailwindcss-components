import React, { useState } from "react";

import Button from "./components/Button";
import Checkbox from "./components/Checkbox ";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const clickHandler = () => {
    setIsLoading(!isLoading);
    alert("thank you 🙂");
  };
  const onChangeHandler = (e) => {
    console.log("value of checkbox : ", e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        isDisabled={false}
        isSelected={false}
        isLoading={isLoading}
        onClick={clickHandler}
      >
        Click Me
      </Button>
      <Checkbox
        id="check1"
        name="books"
        checked={checked}
        onChange={onChangeHandler}
      >
        Click Me
      </Checkbox>
    </div>
  );
}

export default App;
