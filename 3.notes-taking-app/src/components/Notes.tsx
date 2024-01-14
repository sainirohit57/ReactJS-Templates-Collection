import { Card, Button } from "react-bootstrap";
import { Note } from "../models/note.model";

type Props = {
  note: Note;
  handleDelete: (id: string) => void;
};

const Notes = ({ note, handleDelete }: Props) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            variant="danger"
            className="mt-3"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
