type Props = {
  text: string;
};

export const FrameText = ({ text }: Props) => {
  return (
    <svg
      height="52"
      preserveAspectRatio="xMinYMid"
      viewBox="0 0 613 52"
      width="613"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        dominant-baseline="alphabetic"
        dy="0.4em"
        fill="#db2777"
        font-family="Meiryo UI"
        font-size="34"
        font-weight="bold"
        letter-spacing="4"
        stroke="#000000"
        stroke-linejoin="round"
        stroke-width="8"
        text-anchor="middle"
        x="306.5"
        y="50%"
      >
        {text}
      </text>
      <text
        dominant-baseline="alphabetic"
        dy="0.4em"
        fill="#db2777"
        font-family="Meiryo UI"
        font-size="34"
        font-weight="bold"
        letter-spacing="4"
        stroke-width="0"
        text-anchor="middle"
        x="306.5"
        y="50%"
      >
        {text}
      </text>
    </svg>
  );
};
