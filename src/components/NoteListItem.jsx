import { useMemo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const Container = styled.li`
  background: #fefefe;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: 0.2s;
  padding: 12px 24px;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.2rem;
      font-weight: 700;
    }

    i {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

const Description = styled.p`
  margin-top: 4px;
  line-height: 150%;
  opacity: 0.9;
`;

function NoteListItem({ note }) {
  const parsedDate = useMemo(() => {
    console.log(note.date);
    return dayjs(note.date).format("DD/MM/YYYY");
  }, [note.date]);

  return (
    <Container role="article">
      <div>
        <p>{note.person}</p>

        <i>{parsedDate}</i>
      </div>
      <Description>{note.description}</Description>
    </Container>
  );
}

export default NoteListItem;
