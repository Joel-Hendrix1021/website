import * as React from "react";

function IconEdite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.444 12.92v3.333h3.333l9.83-9.83-3.333-3.332-9.83 9.83zm15.74-9.074a.885.885 0 000-1.253l-2.08-2.08a.885.885 0 00-1.252 0L11.225 2.14l3.333 3.333 1.627-1.627z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconEdite;
