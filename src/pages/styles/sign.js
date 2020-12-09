import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  position: relative;
`;

export const GreenBackground = styled.div`
  background: #48bb78;
  width: 100%;
  height: 50%;
`;

export const WhiteBackground = styled.div`
  background: #fefefe;
  width: 100%;
  height: 50%;
`;

export const MainContainer = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  width: 40%;
  padding: 12px 24px;
  background-color: #fefefe;
  border: 1px solid #48bb78;
  border-radius: 0.375rem;
  transition: 0.2s;

  h1 {
    color: #358f5a;
    font-size: clamp(2rem, 2.5rem, 3rem);
  }

  @media only screen and (max-width: 1000px) {
    & {
      width: 85%;
    }
  }

  @media only screen and (max-width: 800px) {
    & {
      width: 90%;
    }
  }
`;
