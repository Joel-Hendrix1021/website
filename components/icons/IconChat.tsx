import * as React from "react";

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2 3.42h-1.6v6.75H3.2v1.5c0 .413.36.75.8.75h8.8l3.2 3V4.17c0-.412-.36-.75-.8-.75zM12 7.92V1.17c0-.412-.36-.75-.8-.75H.8c-.44 0-.8.338-.8.75v10.5l3.2-3h8c.44 0 .8-.337.8-.75z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconChat;
