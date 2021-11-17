import * as React from "react";

function IconDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={13}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.889 14.476c0 .977.8 1.777 1.778 1.777h7.11c.979 0 1.779-.8 1.779-1.777V3.809H.889v10.667zM12.444 1.142h-3.11l-.89-.889H4l-.889.89H0V2.92h12.444V1.142z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconDelete;
