import { useDispatch, useSelector } from "react-redux";
import { clearList, removeBook } from "../features/books/readingSlice";
import Card from "../components/Card";

function ReadingPage() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.reading.list);

  return (
    <Card title="Okuma Listem">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-slate-700">Listendeki kitap sayısı: {list.length}</p>
          <button onClick={() => dispatch(clearList())} className="rounded-full bg-purple-600 px-5 py-2 font-semibold text-white hover:bg-purple-700">
            Listeyi Temizle
          </button>
        </div>

        {list.length === 0 && (
          <p className="rounded-2xl bg-pink-100 p-4 text-pink-700">
            Okuma listende henüz kitap yok.
          </p>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {list.map((book) => (
            <div key={book.id} className="flex flex-col gap-3 rounded-2xl border border-pink-100 bg-pink-50 p-5">
              <h3 className="text-xl font-bold text-purple-800">{book.name}</h3>
              <p className="text-slate-700">Yazar: {book.author}</p>
              <button onClick={() => dispatch(removeBook(book.id))} className="rounded-full bg-pink-500 px-4 py-2 font-semibold text-white hover:bg-pink-600">
                Listeden Çıkar
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ReadingPage;
