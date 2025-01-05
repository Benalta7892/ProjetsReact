import play from "../../assets/play-icon.svg";
import pause from "../../assets/pause-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleLecture } from "../../features/playlist";

export default function TogglePlayButton() {
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleLecture())}
      className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none cursor-pointer">
      <img src={playlist.play ? pause : play} className="w-20 h-20" alt="toggle button" />
    </button>
  );
}
