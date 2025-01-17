import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function DisplayedNote() {
  const notes = useSelector((state) => state.notes);
  const { id } = useParams();
  console.log(useParams());

  const actualNote = notes.list?.find((note) => note.id === id);

  return (
    <div>
      <p className="text-slate-100 text-4xl mb-2 mt-8">{actualNote?.title}</p>
      <p className="text-slate-200 text-xl mb-4">{actualNote?.subtitle}</p>
      <p className="text-slate-300">{actualNote?.bodyText}</p>
    </div>
  );
}
