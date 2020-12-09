import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F4D03F;
  background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);

  @media only screen and (max-width: 700px) {
    & {
      width: 90%;
    }
  }
`