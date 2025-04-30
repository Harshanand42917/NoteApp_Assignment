import { useEffect, useState } from "react";

function NotesList({ refreshTrigger }) {
  const [notes, setNotes] = useState([]);

  // Why useEffect to sync storage → state: Ensures notes are loaded or refreshed from localStorage whenever needed.

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes.reverse());
  }, [refreshTrigger]);

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1); // Remove by index
    localStorage.setItem("notes", JSON.stringify([...updatedNotes].reverse()));
    setNotes(updatedNotes);
  };

  return (
    <div className="grid gap-4">
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available. Add your first one!</p>
      ) : (
        notes.map((note, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition relative">
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
              title="Delete Note">
              &times;
            </button>
            <h3 className="text-lg font-semibold text-blue-800">
              {note.title}
            </h3>
            <p className="text-gray-700 mt-2">{note.content}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(note.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;
