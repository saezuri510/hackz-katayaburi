type Props = {
  text: string;
  fillColor: string;
  fontSize: number;
};

export const FrameText = ({ fillColor, fontSize, text }: Props) => {
  return (
    <svg
      height="52"
      preserveAspectRatio="xMinYMid"
      viewBox="0 0 613 52"
      width="613"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        dominantBaseline="alphabetic"
        dy="0.4em"
        fill={fillColor}
        fontFamily="Meiryo UI"
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="4"
        stroke="#000000"
        strokeLinejoin="round"
        strokeWidth="8"
        textAnchor="middle"
        x="306.5"
        y="50%"
      >
        {text}
      </text>
      <text
        dominantBaseline="alphabetic"
        dy="0.4em"
        fill={fillColor}
        fontFamily="Meiryo UI"
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="4"
        strokeWidth="0"
        textAnchor="middle"
        x="306.5"
        y="50%"
      >
        {text}
      </text>
    </svg>
  );
};
