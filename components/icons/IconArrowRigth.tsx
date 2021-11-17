import * as React from "react";

function IconArrowRigth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={11}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.352 1.926L6.656 8.23.352 14.534l1.696 1.696 8-8-8-8L.352 1.926z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconArrowRigth;
