import React, { useEffect, useState } from "react";
import "./accordion.css";

function Accordion() {
  const [expandedText, setExpandedText] = useState(false);

  // useEffect(() => {
  //  handleClick()
  // }, [expandedText]);

  function handleClick() {
    setExpandedText(!expandedText);
  }
  return (
    <div className="main">
      <div className="accordion">
        <span>Lesson 1</span>
        {expandedText ? (
          <button onClick={handleClick}>+</button>
        ) : (
          <button onClick={handleClick}>-</button>
        )}
      </div>
      {expandedText ? (
        <div className="expandText1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      ) : null}
      <div className="accordion">
        <span>Lesson 1</span>
        {expandedText ? (
          <button onClick={handleClick}>+</button>
        ) : (
          <button onClick={handleClick}>-</button>
        )}
      </div>
      {expandedText ? (
        <div className="expandText1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      ) : null}
      <div className="accordion">
        <span>Lesson 1</span>
        {expandedText ? (
          <button onClick={handleClick}>+</button>
        ) : (
          <button onClick={handleClick}>-</button>
        )}
      </div>
      {expandedText ? (
        <div className="expandText1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
