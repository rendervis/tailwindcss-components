import React, { useState } from "react";

import Button from "./components/Button";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = () => {
    setIsLoading(!isLoading);
    alert("thank you 🙂");
  };
  return (
    <div className="App">
      <Button
        isDisabled={false}
        isSelected={false}
        isLoading={isLoading}
        onClick={clickHandler}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
