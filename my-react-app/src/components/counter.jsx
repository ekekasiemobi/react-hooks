// Requirements:

// Use useState for count (start at 0)
// Increment button
// Decrement button
// Reset button
// Display current count

import React from "react";
import { useState } from "react";
import './counter.css'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="count"> Count: {count} </p>
      <button className="increment" type="button" onClick={() => setCount(count + 1)}>Increment</button> <br /> <br />
      <button className="decrement" type="button" onClick={() => setCount(count - 1 )}>Decrement</button> <br /> <br />
      <button className="reset" type="button" onClick={() => setCount(0)}>Reset</button>

    </>
  )
}

export default Counter