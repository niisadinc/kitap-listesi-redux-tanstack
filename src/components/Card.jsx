function Card({ title, children }) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-white/90 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-purple-800">{title}</h2>
      {children}
    </div>
  );
}

export default Card;
