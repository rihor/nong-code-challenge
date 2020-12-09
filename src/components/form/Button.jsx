import styled from "styled-components";

const Container = styled.button`
  margin: 16px 0;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  background: #358f5a;
  color: #fefefe;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 0 2px transparent;
  transition: 0.2s;

  &:active {
    box-shadow: 0 0 0 2px #48bb78;
  }
`;

const Button = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
