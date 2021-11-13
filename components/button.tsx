/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

export function Button() {
  return (
    <button className={css({ backgroundColor: "black", color: "white" })}>
      Click me!
    </button>
  );
}
