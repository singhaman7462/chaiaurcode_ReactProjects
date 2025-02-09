import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Video Code......

// function App() {
//  let [count,setCounter]=useState(15);

//  const increaseHandler=()=>{
//   //count++;
//   setCounter(count+1);
//   // console.log(count);

//  }
//  const decreaseHandler=()=>{
//   // count--;
//   setCounter(count-1);
//   // console.log(count);

//  }
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {count}</h2>
//       <button onClick={increaseHandler}>Increase</button>
//       <br/>
//       <button onClick={decreaseHandler}>Decrease</button>

//     </>
//   )
// }

// export default App

//Assignment ->Count value should be between 0 to 20.

function App() {
  let [count, setCounter] = useState(15);

  const increaseHandler = () => {
    if (count < 20) {
      count++;
      setCounter(count);
    }
  };
  const decreaseHandler = () => {
    if (count > 0) {
      count--;
      setCounter(count);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={increaseHandler}>Increase</button>
      <br />
      <button onClick={decreaseHandler}>Decrease</button>
    </>
  );
}

export default App;
