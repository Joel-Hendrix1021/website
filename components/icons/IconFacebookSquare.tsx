import * as React from "react";

function IconFacebookSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.75 1.92H3.25C2.01 1.92 1 2.93 1 4.17v13.5c0 1.241 1.01 2.25 2.25 2.25H10v-6.187H7.75V10.92H10V8.67a3.375 3.375 0 013.375-3.375h2.25v2.813H14.5c-.621 0-1.125-.059-1.125.562v2.25h2.813l-1.125 2.813h-1.688v6.187h3.375c1.24 0 2.25-1.009 2.25-2.25V4.17c0-1.24-1.01-2.25-2.25-2.25z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconFacebookSquare;
