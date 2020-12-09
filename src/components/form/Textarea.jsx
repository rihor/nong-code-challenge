import { Container } from "./styles";

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
