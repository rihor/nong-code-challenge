import styled from "styled-components";

export const ListContainer = styled.ul`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  width: 50%;
  overflow-y: auto;
  transition: 0.2s;
  @media only screen and (max-width: 700px) {
    & {
      width: 90%;
    }
  }

  h1 {
    color: #fefefe;
    font-size: 3rem;
    margin-bottom: 16px;
  }

  ul {
    margin-bottom: 100px;

    li {
      & + li {
        margin-top: 12px;
      }
    }
  }
`;

export const FloatingActionButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 100%;
  bottom: 30px;
  right: 20px;
  background: #48bb78;
  color: #fefefe;

  transition: 0.2s;
  @media only screen and (min-width: 1000px) {
    & {
      right: 23vw;
    }
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;

  @keyframes rotation {
    from {
      transform: rotate(359deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  svg {
    width: 90px;
    height: 90px;
    opacity: 0.4;
    animation: rotation 2s infinite linear;
  }
`;
