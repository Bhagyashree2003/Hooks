import React, { useRef } from "react";

function RefHook() {
  const inputref = useRef(null);

  const ONClick = () => {
    console.log(inputref.current.value);
    // inputref.current.focus();
    inputref.current.value = "";
  };

  return (
    <div className="container">
      <h1>Text</h1>
      <input
        type="text"
        className="inp"
        placeholder="Enter Your Text."
        ref={inputref}
      />
      <button type="button" className="btn btn-secondary" onClick={ONClick}>
        Submit
      </button>
    </div>
  );
}

export default RefHook;
