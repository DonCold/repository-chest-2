import styled from '@emotion/styled';
import { Link as LinkWouter } from 'wouter';

export const Link = styled(LinkWouter)`
  text-decoration: none;
  border: 1px solid transparent;
  color: #fff;
  background-color: #333435;
  cursor: pointer;
  font-size: 1rem;
  padding: .5rem 1rem;
  margin-right: .5rem;

  :hover {
    background-color: var(--brand-color_2);
  }
`;

export const Button = Link.withComponent('button');
