function PlaylistItem({ name, artist, duration, onClick, img }) {
  return (
    <div
      className="grid grid-cols-[64px_1fr_auto] items-center gap-4 cursor-pointer"
      onClick={onClick}
    >
      <AlbumImage img={img} />
      <div className="flex flex-col items-start">
        <SongName>{name}</SongName>
        <ArtistName>{artist}</ArtistName>
      </div>
      <Duration>{duration}</Duration>
    </div>
  );
}

function AlbumImage({ img }) {
  return (
    <img
      alt="Album Cover"
      className="rounded-md"
      height={64}
      src={img ?? "/muse.jpeg"}
      style={{
        aspectRatio: "64/64",
        objectFit: "cover",
      }}
      width={64}
    />
  );
}

function Duration({ children }) {
  return <span className="text-gray-40">{children} </span>;
}
function SongName({ children }) {
  return <h3 className="text-lg font-bold text-primary-dark">{children}</h3>;
}

function ArtistName({ children }) {
  return <p className="text-tertiary-dark">{children}</p>;
}
export function PlayList({ songs, onClick }) {
  return (
    <div className="flex-1 overflow-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary-dark">
        React Conf Playlist
      </h2>
      <div className="grid gap-4">
        {songs.map((song, id) => (
          <PlaylistItem
            key={id}
            {...song}
            onClick={() => {
              onClick(song);
            }}
          />
        ))}
      </div>
    </div>
  );
}
