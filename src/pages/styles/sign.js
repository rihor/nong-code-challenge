import styled from "styled-components";

export const Title = styled.h1`
  color: #fefefe;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  background: #fefefe;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.1);

  div {
    & + div {
      margin-top: 10px;
    }

    input {
      padding: 4px 8px;
      border-radius: 4px;
      border: none;
      background: #f0f0f0;
    }

    span {
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }
`;
