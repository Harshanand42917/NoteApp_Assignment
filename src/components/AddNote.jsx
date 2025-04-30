import { useState } from "react";

function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Why I chose useState + this submit handler: Efficient for managing controlled form inputs and local UI state.

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = { title, content, createdAt: new Date().toISOString() };

    localStorage.setItem("notes", JSON.stringify([...existingNotes, newNote]));

    setTitle("");
    setContent("");
    onNoteAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md shadow">
        Add Note
      </button>
    </form>
  );
}

export default AddNote;
