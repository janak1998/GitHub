import React, { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection1(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    console.log(cpyMultiple);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelect(!enableMultiSelect)}
        className={enableMultiSelect ? "bg-pink" : ""}
      >
        {!enableMultiSelect ? "Enable" : "Disable"} Multi Selection
      </button>
      <div className="acoordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection1(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelect
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer} </div>
                  )}
            </div>
          ))
        ) : (
          <div> No data found ! </div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
