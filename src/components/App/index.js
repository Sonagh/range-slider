import React from "react";
import RangeSlider from "../RangeSlider";
import CustomRangeSlider from "../CustomRangeSlider";

function App() {
  return (
    <>
      <div className="app">
        <div className="range-slider-wrapper">
          <CustomRangeSlider />
        </div>

        <h2 className="my-20">
          Slide changes depend on react code, which is not now created{" "}
        </h2>
        <div className="range-slider-wrapper">
          <RangeSlider thumbLeft="15" thumbRight="15" />
        </div>
      </div>
    </>
  );
}

export default App;
