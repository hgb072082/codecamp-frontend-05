import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "myFont";
    font-size: 30px;

  }
  @font-face {
    font-family: "myFont";
    src: url("/fonts/scifbit.ttf");
  }
`;
