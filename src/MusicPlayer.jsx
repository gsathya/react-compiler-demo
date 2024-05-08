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
  const [song, setSong] = useState(initialSong);

  return (
    <>
      <NowPlaying song={song} onChange={setSong} />
      <PlayList songs={allSongs} onClick={setSong} />
    </>
  );
}

const filterFn = (song) => song.isNew;
