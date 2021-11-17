import * as React from "react";

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.394 19.19v-8.21h2.755l.413-3.2h-3.168V5.737c0-.927.256-1.558 1.586-1.558h1.693V1.314a22.963 22.963 0 00-2.468-.125c-2.443 0-4.115 1.491-4.115 4.23v2.36H5.327v3.2H8.09v8.21h3.304z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconFacebook;
