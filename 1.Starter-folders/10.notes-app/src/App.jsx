import NotesList from "./components/NotesList";
import { useSelector, useDispatch } from "react-redux";
import { getNotesFromAPI } from "./features/notes";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  if (!notes.list) {
    dispatch(getNotesFromAPI());
  }

  return (
    <>
      <NotesList />
    </>
  );
}

export default App;
