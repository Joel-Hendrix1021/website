import * as React from "react";

function IconNotification(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 16.73c1.1 0 2-.739 2-1.641H6c0 .902.9 1.641 2 1.641zm6-4.923V7.704c0-2.519-1.63-4.627-4.5-5.185V1.96C9.5 1.28 8.83.73 8 .73s-1.5.55-1.5 1.23v.559C3.64 3.077 2 5.177 2 7.704v4.103l-2 1.64v.821h16v-.82l-2-1.641zm-2 .82H4V7.704C4 5.67 5.51 4.012 8 4.012s4 1.657 4 3.692v4.923z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconNotification;
