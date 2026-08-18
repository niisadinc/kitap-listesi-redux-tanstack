import Card from "../components/Card";

function HomePage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Projenin Amacı">
        <p className="text-slate-700">
          Bu projede basit bir kitap listesi uygulaması hazırlandı. Kitaplar ayrı bir katalog alanında gösterilir. Kullanıcı beğendiği kitapları kendi okuma listesine ekleyebilir.
        </p>
      </Card>

      <Card title="Kullanılan Yapılar">
        <div className="flex flex-col gap-3 text-slate-700">
          <p>Redux Toolkit ile okuma listesi tutuldu.</p>
          <p>TanStack Query ile asenkron kitap kataloğu yönetildi.</p>
          <p>React Router ile sayfalar arası geçiş yapıldı.</p>
          <p>Tailwind CSS ile pembe ve mor tonlarında tasarım yapıldı.</p>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
