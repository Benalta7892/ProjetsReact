import NotesList from "./components/NotesList";
import { useSelector, useDispatch } from "react-redux";
import { getNotesFromAPI } from "./features/notes";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  if (!notes.list) {
    dispatch(getNotesFromAPI());
  }

  return (
    <div className="bg-slate-800 min-h-screen flex">
      <Sidebar />
      <NotesList />
    </div>
  );
}

export default App;
