import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "title",
      text: "content",
      color: "#f1f1f1",
      date: new Date().toString(),
    },
  ]);

  return (
    <div className="App">
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
