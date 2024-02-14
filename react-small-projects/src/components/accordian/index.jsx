import React, { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
 
  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];

    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection
          ? "Enabled Multi Selection Mode - Click to change"
          : "Enabled Single Mode - Click to change"}
      </button>
      <div className="accordian">
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div
              className="title"
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
            >
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>

            {enableMultipleSelection
              ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )
              : selected === dataItem.id && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
