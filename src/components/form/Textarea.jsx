import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 6px;
    margin-bottom: 2px;
  }

  textarea {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 4px 8px;
    resize: vertical;
    max-height: 300px;
  }

  textarea:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Textarea = ({ value, setValue, label, name }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Container>
  );
};

export default Textarea;
