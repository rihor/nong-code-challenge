import { Container } from "./styles";

const Input = ({ value, setValue, label, name, type }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Container>
  );
};

export default Input;
