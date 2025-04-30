# Custom Note Service – (Frontend Mini Project)

A simple React app to add and view personal notes using `localStorage`. Designed to demonstrate clean architecture, client-side persistence, and thoughtful state/UI management — all without a backend.

---

## Live Site

👉 [Live Demo](https://notemakerapp.vercel.app/)  
👉 [GitHub Repository](https://github.com/Harshanand42917/notemaker_app)

---

## Features

- Add new notes with a title and content  
- View saved notes with title and content snippet  
- Delete notes from the list  
- Data is persisted using browser's `localStorage`  
- Simple tab navigation between "Add Note" and "View Notes"  
- Responsive and clean UI with Tailwind CSS  
- Loading and error states for improved UX  

---

## Project Setup

Follow the steps below to set up and run the project locally:

### Step 1 – Clone the Repository

```bash
git clone https://github.com/Harshanand42917/notemaker_app.git
```

### Step 2 – Navigate to the Project Directory

```bash
cd notemaker_app
```

### Step 3 – Install Dependencies

```bash
npm install
```

### Step 4 – Start the Development Server

```bash
npm run dev
```

### Step 5 – Open in Browser

```
http://localhost:5173
```

---

## Design & Architecture Decisions

### Storage Strategy

- `localStorage` is chosen because it allows easy client-side persistence with no backend.
- **Key Naming:** Stored under `"notes_app_notes"` for clear scoping and to avoid key conflicts.

### Component Design

- **`AddNote.jsx`:** Handles form input and note submission.  
  `// Why I chose useState + this submit handler:` React's `useState` provides real-time control and clean re-rendering on form input.

- **`NotesList.jsx`:** Fetches notes from storage and displays them.  
  `// Why useEffect to sync storage → state:` Ensures the component reads the latest data only once on mount.

###  State Management

- `useState` / `useEffect`: Lightweight and sufficient for this small-scale app. Avoids unnecessary overhead of Context API or Redux.

###  Styling

- **Tailwind CSS** was used.  
  `Why:` Tailwind allows rapid styling using utility classes, which helps maintain clarity without leaving the JSX.

### Navigation

- Simple tab-style button toggle between Add/View screens.  
  `// Why this nav approach for simplicity:` Keeps component logic and UI minimal without React Router overhead.

### Loading & Error Handling

- **Shows “Saving…” indicator while writing.**  
  `// Why show spinner here:` Improves UX by indicating the app is working.

- **Displays error banner if localStorage fails.**  
  `// Why display error banner:` Prevents silent failures and informs the user.
