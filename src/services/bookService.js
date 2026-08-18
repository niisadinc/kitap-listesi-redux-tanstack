const books = [
  { id: 1, name: "Kürk Mantolu Madonna", author: "Sabahattin Ali", type: "Roman" },
  { id: 2, name: "Şeker Portakalı", author: "José Mauro de Vasconcelos", type: "Roman" },
  { id: 3, name: "Hayvan Çiftliği", author: "George Orwell", type: "Siyasi Roman" },
  { id: 4, name: "Simyacı", author: "Paulo Coelho", type: "Roman" },
  { id: 5, name: "Tutunamayanlar", author: "Oğuz Atay", type: "Roman" },
];

export function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 600);
  });
}
