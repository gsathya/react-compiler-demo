import { NowPlaying } from "./NowPlaying";
import { PlayList } from "./PlayList";

import { useState } from "react";

export function Player() {
  const [playback, setPlayback] = useState(0);

  return (
    <>
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="bg-gray-900 text-white p-6 flex flex-col gap-6 lg:w-1/3">
          <NowPlaying playback={playback} onPlaybackChange={setPlayback} />
        </div>
        <div className="flex-1 overflow-auto p-6">
          <PlayList />
        </div>
      </div>
    </>
  );
}
