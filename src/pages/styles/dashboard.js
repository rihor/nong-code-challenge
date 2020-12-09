import styled from "styled-components";

export const Title = styled.h1`
  color: #fefefe;
  margin-bottom: 50px;
  flex: none;
`;

export const Background = styled.div`
  height: 100vh;
  position: relative;
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;

  div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    button {
      svg {
        width: 24px;
        height: 24px;
        flex: none;
        transform: rotate(180deg);
        margin-right: 10px;
      }

      color: white;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      border-radius: 8px;
      padding: 16px 16px 16px 0;
    }
  }

  main {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    height: 100%;

    ul {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 90%;
    }
  }
`;

export const FloatingActionButton = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 100%;
  top: 80%;
  left: 80%;
`