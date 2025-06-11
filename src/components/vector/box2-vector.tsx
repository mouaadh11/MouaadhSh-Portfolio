import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const Box2Vector: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 422 284"
    className="overflow-hidden"
    {...props}
  >
    <path
      d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353"
      fill="transparent"
      strokeWidth={5}
      stroke="rgba(108,227,182,0.5)"
      strokeMiterlimit={10}
      strokeDasharray=""
    />
  </svg>
);
export default Box2Vector;
