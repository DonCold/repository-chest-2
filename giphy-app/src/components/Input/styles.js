import styled from '@emotion/styled';

export const Input = styled.input`
  font-size: 1em;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;

	background: linear-gradient(21deg, #878888, #e8ebea);
	border: #8d979d;
	color: rgb(56, 56, 56);

	padding: 5px;
	padding-bottom: 6px;
	padding-left: 15px;
	padding-right: 15px;

	width: 25vw;
	height: auto;

  ::placeholder {
    color: rgba(56, 56, 56, 0.323);
  }

  :focus {
    outline: none;
    box-shadow: 2px 2px 2px 1px rgba(255, 255, 255, 0.2);
  }
`;
