import styled from "styled-components";

const Container = styled.li`
  background: #fefefe;
  border: 1px solid #eee;
  border-radius: 4px;
`;

function NoteListItem({ note }) {
  return (
    <Container role="article">
      <p>{note.person}</p>
      <p>{note.description}</p>
    </Container>
  );
}

export default NoteListItem;
