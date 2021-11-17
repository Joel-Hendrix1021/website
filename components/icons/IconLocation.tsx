import * as React from "react";

function IconLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={12}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.6.19A5.596 5.596 0 000 5.79c0 4.2 5.6 10.4 5.6 10.4s5.6-6.2 5.6-10.4c0-3.096-2.504-5.6-5.6-5.6zm0 7.6a2 2 0 11.001-4.001A2 2 0 015.6 7.79z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconLocation;
