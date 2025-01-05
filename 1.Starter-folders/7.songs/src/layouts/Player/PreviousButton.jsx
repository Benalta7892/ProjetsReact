import prevIcon from "../../assets/prev-icon.svg";

export default function PreviousButton() {
  return (
    <button className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center">
      <img src={prevIcon} className="w-5 h-5" alt="previous song" />
    </button>
  );
}
