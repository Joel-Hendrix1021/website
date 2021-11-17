import * as React from "react";

function IconLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.183 1.19C1.863 1.19 1 2.097 1 3.29c0 1.165.837 2.098 2.132 2.098h.025c1.346 0 2.183-.933 2.183-2.098-.025-1.192-.837-2.099-2.157-2.099zM1.228 7.045h3.859V19.19H1.228V7.045zM14.558 6.76c-2.082 0-3.478 2.046-3.478 2.046v-1.76H7.222V19.19h3.858v-6.782c0-.363.025-.726.127-.985.28-.725.914-1.477 1.98-1.477 1.396 0 1.955 1.114 1.955 2.747v6.497H19v-6.964c0-3.73-1.904-5.466-4.442-5.466z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconLinkedin;
