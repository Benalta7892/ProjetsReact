import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Player() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const audioRef = useRef();

  return (
    <audio src={playlist.songs?.find((obj) => obj.id === playlist.currentMusicID).url} ref={audioRef} controls></audio>
  );
}
