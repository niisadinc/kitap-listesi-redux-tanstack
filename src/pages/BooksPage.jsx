import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../services/bookService";
import { addBook } from "../features/books/readingSlice";
import Card from "../components/Card";

function BooksPage() {
  const dispatch = useDispatch();
  const readingList = useSelector((state) => state.reading.list);
  const [message, setMessage] = useState("");

  const { data: books = [], isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    staleTime: 30000,
  });

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage("");
    }, 1800);
  };

  const handleAddBook = (book) => {
    const isAdded = readingList.some((item) => item.id === book.id);

    if (isAdded) {
      showMessage("Bu kitap zaten okuma listende var.");
      return;
    }

    dispatch(addBook(book));
    showMessage("Kitap okuma listene eklendi.");
  };

  return (
    <div className="relative">
      {message && (
        <div className="fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded-full bg-purple-400 px-6 py-3 font-semibold text-white shadow-lg">
          {message}
        </div>
      )}

      <Card title="Kitap Kataloğu">
        <div className="flex flex-col gap-5">
          <p className="text-slate-700">
            Bu sayfada kitap kataloğu asenkron olarak yönetilir. Beğendiğin kitapları okuma listene ekleyebilirsin.
          </p>

          {isLoading && <p className="rounded-2xl bg-pink-100 p-4 text-pink-700">Kitaplar hazırlanıyor...</p>}
          {isError && <p className="rounded-2xl bg-red-100 p-4 text-red-700">Kitaplar gösterilirken bir sorun oluştu.</p>}

          <div className="grid gap-4 md:grid-cols-2">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col gap-3 rounded-2xl border border-purple-100 bg-purple-50 p-5">
                <h3 className="text-xl font-bold text-purple-800">{book.name}</h3>
                <p className="text-slate-700">Yazar: {book.author}</p>
                <p className="text-slate-700">Tür: {book.type}</p>
                <button onClick={() => handleAddBook(book)} className="rounded-full bg-pink-500 px-4 py-2 font-semibold text-white hover:bg-pink-600">
                  Okuma Listeme Ekle
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BooksPage;
