import React from "react";
import PropTypes from "prop-types";

export default function RangeSlider({ thumbLeft, thumbRight }) {
  return (
    <div className="range-slider">
      <input
        type="range"
        min="0"
        max="100"
        className="range-slider__input"
      />
      <input
        type="range"
        min="0"
        max="100"
        className="range-slider__input"
      />

      <div className="slider">
        <div className="slider__truck" />
        <div
          className="slider__range"
          style={{ left: thumbLeft, right: thumbRight }}
        />
        <div
          className="slider__thumb slider__thumb_left"
          style={{ left: thumbLeft }}
        />
        <div
          className="slider__thumb slider__thumb_right"
          style={{ right: thumbRight }}
        />
      </div>
    </div>
  );
}

RangeSlider.propTypes = {
  thumbLeft: PropTypes.string.isRequired,
  thumbRight: PropTypes.string.isRequired,
};
