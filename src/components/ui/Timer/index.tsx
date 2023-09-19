import React from "react";

interface CircularProgressPercentage {
	count: number;
}

function CircularProgress( {count} : CircularProgressPercentage ) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = (count / 100) * circumference;
  return (
    <svg width="120" height="120" className="rounded-full border border-black bg-white">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="blue"
        strokeWidth="100"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - offset}
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}

export default CircularProgress