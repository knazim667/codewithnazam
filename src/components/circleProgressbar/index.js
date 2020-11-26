import React from "react";

const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: "0 0 58 58",
  x: "29",
  y: "29",
  radio: "15.91549430918954",
};

const CircleProgress = ({
  className,
  trailStrokeColor,
  strokeColor,
  percentage,
}) => {
  return (
    <figure className={className}>
      <svg className="svgStyle" viewBox={circleConfig.viewBox}>
        <circle
          className="ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={trailStrokeColor}
          strokeWidth="3"
        />

        <circle
          className="path"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={strokeColor}
          strokeDasharray={`${percentage} ${100 - percentage}`}
          strokeDashoffset={INITIAL_OFFSET}
          strokeWidth="3"
        />
        <g className="circle-label">
          <text
            x="50%"
            y="50%"
            stroke="#666"
            strokeWidth="0px"
            className="circle-percentage"
          >
            {percentage}%
          </text>
        </g>
      </svg>
    </figure>
  );
};
export default CircleProgress;
