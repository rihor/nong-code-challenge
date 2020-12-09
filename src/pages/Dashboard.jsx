import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useSession } from "../stores/Session";
import api from "../services/cropScoutApi";
import Note from "../components/NoteListItem";

import { Background, GreenBackground, WhiteBackground } from "./styles/shared";
import {
  ListContainer,
  FloatingActionButton,
  LoadingContainer,
} from "./styles/dashboard";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  const { signOut } = useSession();

  async function listNotes() {
    setLoading(true);
    const items = await api.getList();

    if (items) {
      setNotes(items);
      setLoading(false);
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
      <GreenBackground>
        <div>
          <button onClick={signOut}>
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
            log out
          </button>
        </div>
      </GreenBackground>
      <WhiteBackground></WhiteBackground>
      <ListContainer>
        <header>
          <h1>All notes</h1>
        </header>

        {loading && (
          <LoadingContainer>
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </LoadingContainer>
        )}

        <ul>
          {!loading && notes.map((note) => <Note note={note} key={note.id} />)}
        </ul>
      </ListContainer>
      <FloatingActionButton onClick={goToCreateNotePage}>
        <svg
          xmlns="http:www.w3.org/2000/svg"
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

  // return (
  //   <Background>
  //     <Container>
  //       <div>
  //         <button onClick={signOut}>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             viewBox="0 0 20 20"
  //             fill="currentColor"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //           logout
  //         </button>
  //       </div>
  //       <main>
  //         <Title>All notes</Title>
  //         <ul>
  //           {notes.map((note) => (
  //             <Note note={note} key={note.id} />
  //           ))}
  //         </ul>
  //       </main>
  //     </Container>
  //     <FloatingActionButton onClick={goToCreateNotePage}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M12 6v6m0 0v6m0-6h6m-6 0H6"
  //         />
  //       </svg>
  //     </FloatingActionButton>
  //   </Background>
  // );
}

export default Dashboard;
