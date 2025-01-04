import nextIcon from "../../assets/next-icon.svg";

export default function NextButton() {
  return (
    <button className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center">
      <img src={nextIcon} className="w-5 -5" alt="" />
    </button>
  );
}
