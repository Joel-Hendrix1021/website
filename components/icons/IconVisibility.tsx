import * as React from "react";

function IconVisibility(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 21"
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.667 4.627c-4.167 0-7.725 2.592-9.167 6.25 1.442 3.658 5 6.25 9.167 6.25 4.166 0 7.725-2.592 9.166-6.25-1.441-3.658-5-6.25-9.166-6.25zm0 10.417A4.168 4.168 0 016.5 10.877c0-2.3 1.867-4.167 4.167-4.167s4.166 1.867 4.166 4.167-1.866 4.167-4.166 4.167zm0-6.667a2.497 2.497 0 00-2.5 2.5c0 1.383 1.116 2.5 2.5 2.5 1.383 0 2.5-1.117 2.5-2.5s-1.117-2.5-2.5-2.5z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconVisibility;
