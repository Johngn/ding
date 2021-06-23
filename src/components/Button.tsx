import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--button-color);
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover-color);
  }
`;

export default Button;
