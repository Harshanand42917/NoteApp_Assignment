import { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

function App() {
  const [view, setView] = useState("add");
  const [refresh, setRefresh] = useState(0);

  const handleNoteAdded = () => {
    setRefresh((prev) => prev + 1);
    setView("view");
  };

  // Why this nav approach for simplicity: Avoids routing complexity by toggling views with simple state changes.

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">
        📝 My Note Keeper
      </h1>

      <div className="space-x-4 mb-8">
        <button
          onClick={() => setView("add")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded shadow">
          Add Note
        </button>
        <button
          onClick={() => setView("view")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded shadow">
          View Notes
        </button>
      </div>

      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        {view === "add" && <AddNote onNoteAdded={handleNoteAdded} />}
        {view === "view" && <NotesList refreshTrigger={refresh} />}
      </div>
    </div>
  );
}

export default App;
