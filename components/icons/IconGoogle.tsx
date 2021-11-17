import * as React from "react";

function IconGoogle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.184 9.484v3.508h4.998c-.652 2.125-2.429 3.648-4.998 3.648a5.538 5.538 0 110-11.078c1.376 0 2.631.505 3.6 1.337l2.581-2.586a9.146 9.146 0 00-6.181-2.393C5.111 1.92 1 6.031 1 11.1c0 5.07 4.111 9.182 9.184 9.182 7.707 0 9.409-7.209 8.653-10.785l-8.653-.013z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconGoogle;
