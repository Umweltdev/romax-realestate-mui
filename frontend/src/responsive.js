import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 601px) and (max-width: 960px) {
      ${props}
    }
  `;
};

export const ipad = (props) => {
  return css`
    @media only screen and (min-width: 961px) and (max-width: 1185px) {
      ${props}
    }
  `;
};
