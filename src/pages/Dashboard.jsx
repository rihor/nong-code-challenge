import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/cropScoutApi";
import Note from "../components/NoteListItem";
import {
  Title,
  Background,
  Container,
  FloatingActionButton,
} from "./styles/dashboard";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  async function listNotes() {
    const items = await api.getList();

    if (items) {
      setNotes(items);
    }
  }

  useEffect(() => {
    listNotes();
  }, []);

  function goToCreateNotePage() {
    history.push("/create");
  }

  return (
    <Background>
      <Container>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            logout
          </button>
        </div>
        <main>
          <Title>All notes</Title>
          <ul>
            {notes.map((note) => (
              <Note note={note} key={note.id} />
            ))}
          </ul>
        </main>
      </Container>
      <FloatingActionButton onClick={goToCreateNotePage}>
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </FloatingActionButton>
    </Background>
  );
}

export default Dashboard;
