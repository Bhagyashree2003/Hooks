import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const isRef = useRef(null);
  return (
    <div className="container m-5">
      <button
        type="button"
        onClick={() => {
          isRef.current.altertoggle();
        }}
        className="btn btn-secondary"
      >
        Parent button
      </button>
      <Button ref={isRef} />
    </div>
  );
}

export default ImperativeHandle;
