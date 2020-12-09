import { useState } from "react";

import Input from "../components/form/Input";
import Button from "../components/form/Button";
import {
  Background,
  GreenBackground,
  WhiteBackground,
  MainContainer,
} from "./styles/sign";

import { useSession } from "../stores/Session";

function SignPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useSession();

  async function handleSignIn(event) {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    await signIn({ email, password });
  }

  return (
    <Background>
      <GreenBackground></GreenBackground>
      <WhiteBackground></WhiteBackground>
      <MainContainer>
        <h1>Sign in</h1>

        <form onSubmit={handleSignIn}>
          <Input
            name="email"
            value={email}
            setValue={setEmail}
            label="Email"
            required
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
          </Input>
          <Input
            name=""
            value={password}
            setValue={setPassword}
            label="Password"
            required
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </Input>

          <Button type="submit">Enter</Button>
        </form>
      </MainContainer>
    </Background>
  );
}

export default SignPage;
