import { useState } from "react";

import { Container } from "./styles/shared";
import { Form, Title } from "./styles/sign";

import { useSession } from "../stores/Session";

function SignPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useSession();

  async function handleSignIn(event) {
    event.preventDefault();

    console.log("handleSignIn", email, password);

    await signIn({ email, password });
  }

  return (
    <Container role="main">
      <Title>Sign in</Title>
      <Form>
        <div>
          <label>Email</label>
          <div>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <span>your@email.com</span>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <span>At least six characters</span>
        </div>

        <button type="submit" onClick={handleSignIn}>
          Enter
        </button>
      </Form>
    </Container>
  );
}

export default SignPage;
