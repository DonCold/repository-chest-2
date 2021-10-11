/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { css, jsx } from '@emotion/react';

import FormGif from '@/components/FormGif';
import Button from './../Button/index';

const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const codeErrorStyles = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`;

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem auto;
`;

const SIZE = '250px'

const gifErrorStyles = css`
  width: ${SIZE};
  margin: 1rem auto;
  height: ${SIZE};
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
`;

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

const PageNotFound = () => {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <header>
        <FormGif />
      </header>
      <div>
        <div css={pageErrorStyles}>
          <span css={codeErrorStyles}>404</span>
          <span css={msgErrorStyles}>Sometimes gettings lost isn't that bad</span>
          <img css={gifErrorStyles} src={randomImage()} alt="alt-page-404"/>
          <Button href='/'>Go back home</Button>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;
