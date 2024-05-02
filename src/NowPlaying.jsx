import { Slider } from "@/components/ui/slider";
import { PlayerControls } from "./PlayerControls";

export function NowPlaying({ playback, onPlaybackChange }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <AlbumCover />
        <div>
          <SongName />
          <ArtistName />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <PlayerControls />
      </div>
      <PlaybackSlider playback={playback} onPlaybackChange={onPlaybackChange} />
    </>
  );
}

function SongName() {
  return <h2 className="text-lg font-bold">Starlight</h2>;
}

function ArtistName() {
  return <p className="text-gray-400">Muse</p>;
}

function PlaybackSlider({ playback, onPlaybackChange }) {
  return (
    <>
      <input
        className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
        max={100}
        step={1}
        value={playback}
        type="range"
        onChange={(e) => {
          console.log(e);
          onPlaybackChange(e.target.value);
        }}
      />
      <label>
        <div className="flex items-center justify-between text-sm">
          <span>0:00</span>
          <span>3:45</span>
        </div>
      </label>
    </>
  );
}

function AlbumCover() {
  return (
    <img
      alt="Album Cover"
      className="rounded-md"
      height={64}
      src="/placeholder.svg"
      style={{
        aspectRatio: "64/64",
        objectFit: "cover",
      }}
      width={64}
    />
  );
}
