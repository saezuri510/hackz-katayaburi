interface CircularProgressPercentage {
  count: number;
}

function CircularProgress({ count }: CircularProgressPercentage) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = (count / 100) * circumference;
  return (
    <svg className="rounded-full border border-black bg-white" height="120" width="120">
      <circle
        cx="60"
        cy="60"
        fill="transparent"
        r={radius}
        stroke="blue"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - offset}
        strokeWidth="100"
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}

export default CircularProgress;
