/* eslint-disable import/no-extraneous-dependencies */
import css from "styled-jsx/css";

export default css`
  div {
    display: flex;
    align-items: center;
  }
  div strong {
    margin-left: 0.5rem;
  }
  div :global(img) {
    width: 49px;
    height: 49px;
    border-radius: 9999px;
  }
`;
