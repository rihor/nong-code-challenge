import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 6px;
    margin-bottom: 2px;
  }

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.05);

    svg {
      margin-left: 4px;
      width: 16px;
      height: 16px;
      flex: none;
      color: rgba(0, 0, 0, 0.6);
    }

    input {
      border: none;
      width: 100%;
      background: transparent;
      padding: 4px 8px;
    }
  }

  > div:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Input = ({ value, setValue, label, name, type, children }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <div>
        {children}
        <input
          type={type || "text"}
          id={name}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </Container>
  );
};

export default Input;
