import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [isToggle, setIsToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    altertoggle() {
      setIsToggle(!isToggle);
    },
  }));
  return (
    <div className="container">
      <button type="button" className="btn btn-secondary">
        Child button
      </button>
      {isToggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
