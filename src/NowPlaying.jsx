import { Slider } from "@/components/ui/slider";
import { PlayerControls } from "./PlayerControls";

export function NowPlaying({ song, onChange }) {
  return (
    <div className="bg-gray-90 text-white p-6 flex flex-col gap-6 lg:w-1/3">
      <div className="flex items-center gap-4">
        <AlbumCover />
        <div>
          <SongName>{song.name}</SongName>
          <ArtistName>{song.artist}</ArtistName>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <PlayerControls />
      </div>
      <PlaybackSlider song={song} onChange={onChange} />
    </div>
  );
}

function SongName({ children }) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

function ArtistName({ children }) {
  return <p className="text-gray-40">{children}</p>;
}

function PlaybackSlider({ song, onChange }) {
  return (
    <>
      <input
        className="accent-brand-dark [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
        max={100}
        step={1}
        value={song.current}
        type="range"
        onChange={(e) => {
          onChange({ ...song, current: e.target.value });
        }}
      />
      <label>
        <div className="flex items-center justify-between text-sm">
          <span>{calculateCurrentSongTime(song)}</span>
          <span>{song.duration}</span>
        </div>
      </label>
    </>
  );
}

function formatSeconds(sec) {
  if (sec < 10) {
    return `0${sec}`;
  }

  return `${sec}`;
}

function calculateCurrentSongTime(song) {
  const [mins, seconds] = song.duration.split(":").map((n) => parseInt(n));
  const total = mins * 60 + seconds;
  const currentPercentage = parseInt(song.current);
  const currentNum = Math.floor((currentPercentage * total) / 100);
  const currentMin = Math.floor(currentNum / 60);
  const currentSec = Math.floor(currentNum % 60);
  return `${currentMin}:${formatSeconds(currentSec)}`;
}

function AlbumCover() {
  return (
    <img
      alt="Album Cover"
      className="rounded-md"
      height={64}
      src="/muse.jpeg?"
      style={{
        aspectRatio: "64/64",
        objectFit: "cover",
      }}
      width={64}
    />
  );
}
