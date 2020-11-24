import React, { useEffect, useState } from "react";
import "./App.css";
import { auth, db } from "./services/config";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let notesList = [];
    db.ref("all_notes/0001").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        notesList.push(snap.val());
      });
    });
    setNotes(notesList);
  }, []);

  return (
    <div className="App">
      {notes.map((note) => (
        <div key={note.note_id}>{note.content}</div>
      ))}
    </div>
  );
}

export default App;