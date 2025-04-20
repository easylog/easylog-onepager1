export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="w-full px-6 py-4 shadow-md flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">EasyLog</h1>
        <nav className="space-x-4">
          <a href="/journal" className="text-gray-700 hover:text-blue-500">Journal</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Dokumentieren mit KI – einfach gemacht</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Nutze KI für schnelle, professionelle Journaleinträge im Sozialbereich.
        </p>
        <a href="/journal" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">Loslegen</a>
      </main>
      <footer className="w-full py-6 text-center text-gray-400 text-sm border-t mt-20">
        © {new Date().getFullYear()} EasyLog – Mit ❤️ für Sozialarbeit gemacht.
      </footer>
    </div>
  );
}