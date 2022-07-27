import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [age, setAge] = useState(21);
  const [weight, setWeight] = useState(150);
  const [height, setHeight] = useState(60);

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  function handleHeight(e) {
    setHeight(e.target.value);
  }

  function printValues(e) {
    e.preventDefault();
    console.log("age: ", age);
    console.log("weight: ", weight);
    console.log("height: ", height);  
  }

  return (
    <div>
      Calculator
      <form onSubmit={printValues}>
        <div>
          <label>
            Age:
            <input value={age} onChange={handleAge} type="number" name="age" />
          </label>
        </div>
        <div>
          <label>
            Weight:
            <input
              value={weight}
              onChange={handleWeight}
              type="number"
              name="age"
            />
          </label>
        </div>
        <div>
          <label>
            Height(in):
            <input
              value={height}
              onChange={handleHeight}
              type="number"
              name="age"
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
