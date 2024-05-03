import { NowPlaying } from "./NowPlaying";
import { PlayList } from "./PlayList";

import { useState, memo, useMemo } from "react";

const initialSong = {
  name: "Starlight",
  artist: "Muse",
  duration: "3:45",
  current: 0,
};

export function MusicPlayer({ songs }) {
  const [song, setSong] = useState(initialSong);
  const filteredSongs = songs.filter(filterFn);

  return (
    <div className="bg-gray-70 flex w-full">
      <NowPlaying song={song} onChange={setSong} />
      <PlayList songs={filteredSongs} onClick={setSong} />
    </div>
  );
}

const filterFn = (song) => song.isNew;
