import * as React from "react";
const StripeLogo = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28.87 28.87"
    width={25}
    height={25}
    id="stripe"
    {...props}
  >
    <g id="Layer_2">
      <g id="Layer_1-2">
        <rect
          width={28.87}
          height={28.87}
          rx={6.48}
          ry={6.48}
          style={{
            fill: "#6772e5",
          }}
        />
        <path
          d="M13.3 11.2c0-.69.57-1 1.49-1a9.84 9.84 0 0 1 4.37 1.13V7.24a11.6 11.6 0 0 0-4.36-.8c-3.56 0-5.94 1.86-5.94 5 0 4.86 6.68 4.07 6.68 6.17 0 .81-.71 1.07-1.68 1.07A11.06 11.06 0 0 1 9 17.25v4.19a12.19 12.19 0 0 0 4.8 1c3.65 0 6.17-1.8 6.17-5 .03-5.21-6.67-4.27-6.67-6.24z"
          style={{
            fill: "#fff",
            fillRule: "evenodd",
          }}
        />
      </g>
    </g>
  </svg>
);
export default StripeLogo;
