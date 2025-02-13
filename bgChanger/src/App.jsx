import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "cyan",
    "olive",
  ];
  // function bgChangeHandler(event) {
  //   setColor(event.target.text);
  // }

  return (
    <div
      className="w-full h-screen duration-200 m-0 p-0"
      style={{ backgroundColor: color }}
    >
      {/* <div className="flex flex-nowrap gap-2 gap-2 overflow-x-auto">
      {colors.map(col => (
        <button
          key={col}
          className="px-4 py-2 text-white rounded"
          style={{ backgroundColor: col }}
          onClick={bgChangeHandler}
        >
          {col}
        </button>
      ))}
    // </div> */}

      <div
        className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3 
       shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "brown" }}
            onClick={() => {
              setColor("brown");
            }}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "cyan" }}
            onClick={() => {
              setColor("cyan");
            }}
          >
            Cyan
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg
         "
            style={{ backgroundColor: "olive" }}
            onClick={() => {
              setColor("olive");
            }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
