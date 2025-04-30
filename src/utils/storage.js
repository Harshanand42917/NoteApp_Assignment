const STORAGE_KEY = "notes_app";

export function getNotes() {
  try {
    const notes = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return notes || [];
  } catch (err) {
    console.error("Error reading from localStorage", err);
    return [];
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    throw new Error("Storage quota exceeded");
  }
}

// Why show spinner here: Improves UX by informing the user that a background operation is in progress.
// Why display error banner: Helps user understand if something went wrong with saving notes
