import { NowPlaying } from "./NowPlaying";
import { PlayList } from "./PlayList";

import { useState, memo, useMemo } from "react";

const initialSong = {
  name: "Starlight",
  artist: "Muse",
  duration: "3:45",
  current: 0,
};

export function MusicPlayer({ allSongs }) {
  const [currentSong, setCurrentSong] = useState(initialSong);

  return (
    <>
      <NowPlaying song={currentSong} onChange={setCurrentSong} />
      <PlayList songs={allSongs} onClick={setCurrentSong} />
    </>
  );
}

const filterFn = (song) => song.isNew;
