import * as React from "react";

function IconRemove(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.667 8.92H3.333V7.587h9.334V8.92z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconRemove;
