import Song from "./Song"

export default function SearchResults({songs, onAddToLibrary}) {

  return (

    <>
      <div className="space-y-4">
      {songs.map((song, index) => (
        <div key={index} className="flex items-center justify-between">
          <Song title={song.title} artist={song.artist} duration={song.duration} />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => onAddToLibrary(song)}
          >
            Agregar a mi biblioteca
          </button>
        </div>
      ))}
    </div>
    </>

  )
}
