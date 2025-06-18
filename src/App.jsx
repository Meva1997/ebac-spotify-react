import Header from "./components/Header"
import Song from "./components/Song"
import { useEffect } from "react";

function App() {


  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <>
      <header className="bg-black py-5">
        <Header />
      </header>
      <main className='flex flex-col items-center bg-gray-800 text-white p-5 rounded-lg shadow-lg w-1/2 mx-auto gap-10 text-center'>
        <Song 
          title="Numb"
          artist="Linkin Park"
          duration="3:45 min"
        />
        <Song 
          title="B.Y.O.B."
          artist="System of a Down"
          duration="4:15 min"
        />
        <Song 
          title="Crazy Train"
          artist="Ozzy Osbourne"
          duration="4:55 min"
        />
      </main>
    </>
  )
}

export default App
