const songs = [
  {
    name: "Starlight",
    artist: "Muse",
    duration: "3:45",
  },
  {
    name: "Uprising",
    artist: "Muse",
    duration: "4:12",
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
  },
  {
    name: "Madness",
    artist: "Muse",
    duration: "3:58",
  },
  {
    name: "Supermassive Black Hole",
    artist: "Muse",
    duration: "3:37",
  },
  {
    name: "Time Is Running Out",
    artist: "Muse",
    duration: "4:24",
  },
];

function PlaylistItem({ name, artist, duration }) {
  return (
    <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
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
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-400">{artist}</p>
      </div>
      <span className="text-gray-400">{duration}</span>
    </div>
  );
}
export function PlayList() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <div className="grid gap-4">
        {songs.map((song, id) => (
          <PlaylistItem key={id} {...song} />
        ))}
      </div>
    </>
  );
}
