import Header from "./components/Header"
import Library from "./components/Library";
import SearchResults from "./components/SearchResults";
import Song from "./components/Song"
import { useEffect, useState } from "react";

function App() {

  const [searchResults] = useState([
    { title: "Numb", artist: "Linkin Park", duration: "3:30" },
    { title: "B.Y.O.B.", artist: "System of a Down", duration: "4:00" },
    { title: "Crazy Train", artist: "Ozzy Osbourne", duration: "2:45" },
  ]);

  const [library, setLibrary] = useState([])

  const addToLibrary = (song) => {
    if(!library.some((libsong) => libsong.title === song.title)){
      setLibrary([...library, song]);
    }
  }

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <>
      <header className="bg-black py-5">
        <Header />
      </header>
      <main className='flex flex-col items-center bg-gray-800 text-white p-5 rounded-lg shadow-lg w-1/2 mx-auto gap-10 text-center'>
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          
          <SearchResults 
            songs={searchResults} 
            onAddToLibrary={addToLibrary}
          />
        </section>

        <section className="w-full">
          <Library songs={library} />
        </section>
      </main>
    </>
  )
}

export default App
