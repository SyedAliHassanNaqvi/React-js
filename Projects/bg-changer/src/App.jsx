import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colorChange = (props) => {
    setColor(props);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-end"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center mb-0 bg-black px-5 py-5 rounded-3xl gap-3">
          <button
            className="bg-red-500 p-2 m-2"
            onClick={() => {
              colorChange("red");
            }}
          >
            Red
          </button>

          <button
            className="bg-green-500 p-2 m-2"
            onClick={() => {
              colorChange("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 p-2 m-2"
            onClick={() => {
              colorChange("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-white p-2 m-2"
            onClick={() => {
              colorChange("White");
            }}
          >
            White
          </button>
          <button
            className="bg-slate-900 p-2 m-2 text-white"
            onClick={() => {
              colorChange("gray");
            }}
          >
            Slate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
