import { useDispatch, useSelector } from "react-redux";
import { updateColorPosition } from "../../features/gradient";

export default function RangeColorPosition() {
  const dispatch = useDispatch();
  const gradientValues = useSelector((state) => state.gradient);

  const selectedColorPosition = gradientValues.colors.find((obj) => obj.id === gradientValues.pickedColorId);

  return (
    <input
      value={selectedColorPosition.position}
      onChange={(e) => dispatch(updateColorPosition(e.target.value))}
      className="w-full h-1 mb-10 bg-slate-200 rounded-lg cursor-pointer"
      type="range"
    />
  );
}
