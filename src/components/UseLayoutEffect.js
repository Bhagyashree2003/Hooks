import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputref = useRef(null);
  useEffect(() => {
    // inputref.current.value = "Hey This is me.";
  }, []);

  useLayoutEffect(() => {
    console.log(inputref.current.value);
  }, []);

  return (
    <>
      <div className="container">
        <input
          type="text"
          ref={inputref}
          value="text"
          onChange={(e) => {
            e.target.value();
          }}
          style={{ height: "250px" }}
        />
      </div>
    </>
  );
}

export default UseLayoutEffect;
