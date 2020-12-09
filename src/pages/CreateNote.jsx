import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/cropScoutApi";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/form/Button";
import {
  Background,
  GreenBackground,
  WhiteBackground,
  MainContainer,
  CustomDateTimePicker,
} from "./styles/createNote";

const CreateNote = () => {
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const { goBack, push: pushToAddress } = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!person || !description || !date) {
      alert("You need to fill the entire form!");
      return;
    }

    const newItem = await api.createItem(person, description, date);

    if (newItem) {
      setPerson("");
      setDescription("");
      alert("A new note was created.");
      pushToAddress("/dashboard");
    } else {
      alert("Could not create a note.");
    }
  }

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
        <form onSubmit={handleSubmit}>
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

          <CustomDateTimePicker value={date} onChange={setDate} />

          <Button type="submit">Save note</Button>
        </form>
      </MainContainer>
    </Background>
  );
};

export default CreateNote;
