import React, { useEffect, useState } from "react";
import "./App.css";

const App = ({ autorization, database }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const notesList = [];
    database?.ref("all_notes/0001").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        notesList.push(snap.val());
      });
      setNotes(notesList);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <span>IS LOADING</span>
      ) : (
        notes.map((note) => <div key={note.note_id}>{note.content}</div>)
      )}
    </div>
  );
};

export default App;
