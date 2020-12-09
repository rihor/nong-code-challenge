import { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/form/Button";
import {
  Background,
  GreenBackground,
  WhiteBackground,
  MainContainer,
} from "./styles/createNote";

const CreateNote = () => {
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const { goBack } = useHistory();

  return (
    <Background>
      <GreenBackground>
        <div>
          <button onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            go back
          </button>
        </div>
      </GreenBackground>
      <WhiteBackground></WhiteBackground>
      <MainContainer>
        <h1>Create a new note</h1>
        <form>
          <Input
            name="person"
            value={person}
            setValue={setPerson}
            label="Person"
          />
          <Textarea
            name="description"
            value={description}
            setValue={setDescription}
            label="Description"
          />
          <Input
            name="date"
            value={date}
            setValue={setDate}
            label="Date"
            type="date"
          />

          <Button type="submit">Save note</Button>
        </form>
      </MainContainer>
    </Background>
  );
};

export default CreateNote;
