import React, { useEffect, useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handleHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  const handleRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleHexColor();
    } else {
      handleRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="flex gap-5 justify-center pt-5">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>

        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
        >
          Generate Random Color
        </button>
      </div>

      <div className="flex justify-center items-center text-white h-[80vh] text-[30px] gap-10 text-center">
        <div className=" p-3 rounded-md border ">
          <h3>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
          <h2>{color}</h2>
        </div>
      </div>
    </div>
  );
};
