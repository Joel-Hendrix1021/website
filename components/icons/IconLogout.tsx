import * as React from "react";

function IconLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.174 4.635L11.92 5.888l1.404 1.413H6.063V9.08h7.262l-1.404 1.404 1.253 1.263 3.555-3.556-3.555-3.555zM2.507 1.968H8.73V.19H2.507C1.53.19.73.99.73 1.968v12.444c0 .978.8 1.778 1.778 1.778H8.73v-1.778H2.507V1.968z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconLogout;
