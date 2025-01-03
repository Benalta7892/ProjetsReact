import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Player() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const audioRef = useRef();

  return <audio src="" ref={audioRef} controls></audio>;
}
