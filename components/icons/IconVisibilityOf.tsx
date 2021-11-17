import * as React from "react";

function IconVisibilityOf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.754c2.3 0 4.167 1.866 4.167 4.166 0 .542-.109 1.05-.3 1.525L16.3 14.88a9.848 9.848 0 002.858-3.959c-1.441-3.658-5-6.25-9.166-6.25a9.704 9.704 0 00-3.317.584l1.8 1.8c.475-.192.983-.3 1.525-.3zM1.667 4.479l1.9 1.9.383.383A9.837 9.837 0 00.833 10.92c1.442 3.659 5 6.25 9.167 6.25 1.292 0 2.525-.25 3.65-.7l.35.35 2.442 2.434 1.058-1.059L2.725 3.42 1.667 4.48zm4.608 4.608l1.292 1.292a2.351 2.351 0 00-.067.541c0 1.384 1.117 2.5 2.5 2.5.183 0 .367-.025.542-.066l1.291 1.291a4.13 4.13 0 01-1.833.442 4.168 4.168 0 01-4.167-4.167c0-.658.167-1.275.442-1.833zm3.592-.65l2.625 2.625.016-.133c0-1.384-1.116-2.5-2.5-2.5l-.141.008z"
        fill={props.fill || "#131D40"}
      />
    </svg>
  );
}

export default IconVisibilityOf;
