import React, { useMemo, useState } from "react";

function UseMemoo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);
  //   const multicount = useMemo(
  function multiple() {
    return count * 5;
  }
  // [count]
  //   );
  return (
    <div className="container">
      <h1>Memo hook</h1>
      <h3> Count :{count}</h3>
      <h3> Items :{item}</h3>
      <h3>Multiple : {multiple()}</h3>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setCount(count + 1)}
      >
        Update count
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setItem(item * 2)}
      >
        update item
      </button>
    </div>
  );
}

export default UseMemoo;
