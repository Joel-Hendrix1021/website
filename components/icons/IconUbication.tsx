import * as React from "react";

function IconUbication(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 6.011a2.908 2.908 0 100 5.818 2.908 2.908 0 100-5.818zm6.502 2.182A6.541 6.541 0 008.727 2.42V.92H7.273V2.42a6.541 6.541 0 00-5.775 5.774H0v1.455h1.498a6.541 6.541 0 005.775 5.774v1.498h1.454v-1.498a6.541 6.541 0 005.775-5.774H16V8.193h-1.498zM8 14.011a5.087 5.087 0 01-5.09-5.09A5.087 5.087 0 018 3.83a5.087 5.087 0 015.09 5.09A5.087 5.087 0 018 14.011z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconUbication;
