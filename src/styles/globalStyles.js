import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    min-height: 100vh;
    height: 100%;
  }

  #root {
    min-height: 100vh;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font: 16px 'Work Sans', sans-serif;
  }

  p, em, a, b, span {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`