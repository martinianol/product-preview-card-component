import { css } from "styled-components";

const typography = {
  display: css`
    font-family: "Fraunces", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0px;
  `,
  body: css`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 23;
    letter-spacing: 0px;
  `,
  button: css`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: auto;
    letter-spacing: 0px;
  `,
  overline: css`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: auto;
    letter-spacing: 5px;
  `,
};

export default typography;
