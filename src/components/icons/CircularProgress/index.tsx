import { useEffect, useState } from "react";

export const CircularProgress = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (count <= 1199) {
          return prev + 1;
        }
        return prev;
      });
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = (count / 1200) * circumference;

  return (
    <svg
      className="absolute left-[15px] top-[22px] z-[-1] rounded-full border border-black"
      height="120"
      width="120"
    >
      <path
        clipRule="evenodd"
        d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L12.058 2.05806C12.3021 1.81398 12.6978 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13361 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.49998 8.49998V4.09998C5.06992 4.09998 3.09998 6.06992 3.09998"
        fill="currentColor"
        fillRule="evenodd"
      />
      <circle
        cx="60"
        cy="60"
        fill="transparent"
        r={radius}
        stroke={count > 899 ? "rgb(253 224 71)" : "rgb(7 241 205)"}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - offset}
        strokeWidth="100"
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
};
