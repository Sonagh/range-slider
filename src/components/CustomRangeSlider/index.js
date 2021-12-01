import React, { useState, useEffect, createRef } from "react";

export default function CustomRangeSlider() {
  const [range1Value, setRange1Value] = useState(-30);
  const [range2Value, setRange2Value] = useState(20);

  const range1Ref = createRef();
  const range2Ref = createRef();

  useEffect(() => {
    const eventHandler = (e) => {
      let target = e.target;
      target.parentNode.style.setProperty(`--${target.id}`, +target.value);
    };

    range1Ref.current.addEventListener("input", eventHandler, false);
    range2Ref.current.addEventListener("input", eventHandler, false);

    return () => {
      range1Ref.current.removeEventListener("input", eventHandler, false);
      range2Ref.current.removeEventListener("input", eventHandler, false);
    };
  }, []);

  return (
    <div
      className="custom-range-slider"
      style={{ "--range1": -30, "--range2": 20, "--min": -50, "--max": 50 }}
    >
      <input
        ref={range1Ref}
        id="range1"
        type="range"
        min="-50"
        max="50"
        value={range1Value}
        className="custom-range-slider__input"
        onChange={(e) => {
          setRange1Value(e.target.value);
        }}
      />
      <input
        ref={range2Ref}
        id="range2"
        type="range"
        min="-50"
        max="50"
        value={range2Value}
        className="custom-range-slider__input"
        onChange={(e) => {
          setRange2Value(e.target.value);
        }}
      />
    </div>
  );
}
