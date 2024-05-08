import "./App.css";
import "./style.css";

import { Header } from "./Header";
import { MusicPlayer } from "./MusicPlayer";
import Clock from "./Clock";
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(false);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header
          toggleClock={() => {
            setShowClock((t) => !t);
          }}
        />
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="bg-gray-70 flex w-full">
            <MusicPlayer allSongs={songs} />
          </div>
        </div>
      </div>
      {showClock && <Clock />}
    </>
  );
}

export default App;

const songs = [
  {
    name: "Starlight",
    artist: "Muse",
    duration: "3:45",
    current: 0,
    isNew: true,
  },
  {
    name: "Uprising",
    artist: "Muse",
    duration: "4:12",
    current: 0,
    isNew: false,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
    current: 0,
    isNew: true,
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
    current: 0,
    isNew: true,
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
    current: 0,
    isNew: true,
  },
];
