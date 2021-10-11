import styled from "@emotion/styled";
import { Link } from 'wouter';
import { bps } from '@/styles';

export const TitleH3 = styled.h3`
  color: #fff;
`;

export const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${bps.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${bps.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CategoryItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CategoryLink = styled(Link)`
  color: rgb(141, 138, 138);
  text-decoration: none;

  :hover {
    color: rgb(186, 209, 230);
  }

  :active {
    color: rgb(99, 118, 118);
  }
`;
