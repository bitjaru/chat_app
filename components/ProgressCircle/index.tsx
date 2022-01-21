import React, { VFC, useEffect, useRef, useState } from "react";
import { ProgressCircleBody } from "./styles";

interface Props {
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
}
const ProgressCircle: VFC<Props> = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef<SVGCircleElement | null>(null);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    if (circleRef && circleRef.current) {
      circleRef.current.style.transition =
        "stroke-dashoffset 850ms ease-in-out";
    }
  }, [setOffset, progress, circumference, offset]);

  return (
    <ProgressCircleBody className="svg-circle-body" width={size} height={size}>
      <circle
        className="svg-circle-bg"
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="svg-circle"
        ref={circleRef}
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </ProgressCircleBody>
  );
};
export default ProgressCircle;
