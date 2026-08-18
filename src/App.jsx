import { Routes, Route } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ReadingPage from "./pages/ReadingPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-fuchsia-200 to-purple-300 px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="flex flex-col items-center gap-4 rounded-3xl bg-purple-700 p-8 text-center text-white shadow-xl">
          <GiBookshelf className="text-6xl" />
          <h1 className="text-4xl font-bold">Kitap Listesi Uygulaması</h1>
          <p className="max-w-2xl text-purple-100">
            Redux ile okuma listesi yönetimi, TanStack Query ile asenkron kitap kataloğu yönetimi.
          </p>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kitaplar" element={<BooksPage />} />
            <Route path="/okuma-listem" element={<ReadingPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
