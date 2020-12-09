import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 6px;
    margin-bottom: 2px;
  }

  input, textarea {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 4px 8px;
  }

  textarea {
    resize: vertical;
    max-height: 300px;
  }

  input:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
