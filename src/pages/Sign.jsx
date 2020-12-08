import { Container } from "./styles/shared";
import { Form, Title } from "./styles/sign";

function SignPage() {
  return (
    <Container role="main">
      <Title>Sign in</Title>
      <Form>
        <div>
          <label>Email</label>
          <div>
            <input type="email" />
          </div>
          <span>your@email.com</span>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="password" />
          </div>
          <span>At least six characters</span>
        </div>
      </Form>
    </Container>
  );
}

export default SignPage;
