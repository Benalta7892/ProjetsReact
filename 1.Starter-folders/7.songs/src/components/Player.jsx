import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Player() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const audioRef = useRef();

  useEffect(() => {
    if (playlist.songs && playlist.play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playlist]);

  return (
    <audio
      className="outline-none"
      id="audio-player"
      src={playlist.songs?.find((obj) => obj.id === playlist.currentMusicID).url}
      ref={audioRef}></audio>
  );
}
