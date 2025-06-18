import Song from "./Song"

export default function Library({songs}) {
  return (
    
    <div>
      <h2 className="text-2xl font-bold mb-4">Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <p className="text-gray-400">No hay canciones en tu biblioteca.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {songs.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
            />
          ))}
        </div>
      )}
    </div>
  )
}
