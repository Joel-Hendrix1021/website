import * as React from "react";

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 2.21L14.389.6 8 6.987 1.611.6 0 2.21 6.389 8.6 0 14.987 1.611 16.6 8 10.21l6.389 6.389L16 14.987 9.611 8.6 16 2.21z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconClose;
