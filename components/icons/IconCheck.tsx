import * as React from "react";

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.085 10.255L1.292 6.462 0 7.744l5.085 5.085L16 1.914 14.717.63l-9.632 9.624z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconCheck;
