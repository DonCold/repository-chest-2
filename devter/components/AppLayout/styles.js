import css from 'styled-jsx/css';

import { fonts, colors, breakpoints } from '../../styles/theme';
import { addOpacity } from '../../styles/util';

const backgroundColor = addOpacity(colors.primary, 0.3);

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${ breakpoints.mobile }) {
    main {
      width: ${ breakpoints.mobile };
      height: 90vh;
    }
  }
`

export const globalStyles = css.global`
  html,
  body {
    background-image:
      radial-gradient(${ backgroundColor } 1px, ${ colors.grey } 1px),
      radial-gradient(${ backgroundColor } 1px, ${ colors.grey } 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${ fonts.base };
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
