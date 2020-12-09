import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  position: relative;
`;

export const GreenBackground = styled.div`
  background: #48bb78;
  width: 100%;
  height: 50vh;

  
  > div {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    transition: 0.2s;
    
    button {
      svg {
        width: 24px;
        height: 24px;
        flex: none;
        margin-right: 16px;
      }

      color: #fefefe;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: none;
      border: none;
      padding: 16px;
    }
  }

  @media only screen and (max-width: 1000px) {
    > div {
      width: 85%;
    }
  }

  @media only screen and (max-width: 800px) {
    > div {
      width: 90%;
    }
  }
`;

export const WhiteBackground = styled.div`
  background: #fefefe;
  width: 100%;
  height: auto;
`;
