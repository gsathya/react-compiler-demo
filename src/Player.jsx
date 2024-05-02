import { NowPlaying } from "./NowPlaying";
import { PlayList } from "./PlayList";

import { useState } from "react";

export function Player() {
  const [song, setSong] = useState({
    name: "Starlight",
    artist: "Muse",
    duration: "3:45",
    current: 0,
  });

  return (
    <>
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="bg-gray-900 text-white p-6 flex flex-col gap-6 lg:w-1/3">
          <NowPlaying song={song} onChange={setSong} />
        </div>
        <div className="flex-1 overflow-auto p-6">
          <PlayList onClick={setSong} songs={songs} />
        </div>
      </div>
    </>
  );
}

const songs = [
  {
    name: "Starlight",
    artist: "Muse",
    duration: "3:45",
    current: 0,
  },
  {
    name: "Uprising",
    artist: "Muse",
    duration: "4:12",
    current: 0,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
  },
];
