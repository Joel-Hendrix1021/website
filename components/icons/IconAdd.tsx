import * as React from "react";

function IconAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 13.92h-6v6h-2v-6H5v-2h6v-6h2v6h6v2z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconAdd;
