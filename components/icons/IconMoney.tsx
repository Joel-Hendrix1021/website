import * as React from "react";

function IconMoney(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={10}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.383 7.752c-2.23-.524-2.947-1.066-2.947-1.91 0-.97.992-1.645 2.652-1.645 1.749 0 2.397.755 2.456 1.866h2.171c-.069-1.529-1.1-2.933-3.153-3.386V.73H3.615v1.92C1.709 3.023.177 4.143.177 5.859c0 2.053 1.876 3.075 4.617 3.671 2.456.533 2.947 1.316 2.947 2.142 0 .614-.482 1.591-2.653 1.591-2.023 0-2.819-.818-2.927-1.866H0c.118 1.946 1.729 3.04 3.615 3.404v1.929h2.947v-1.911C8.477 14.49 10 13.485 10 11.663c0-2.524-2.387-3.386-4.617-3.91z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconMoney;
