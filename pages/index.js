export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="w-full px-6 py-4 shadow-md flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">EasyLog</h1>
        <nav className="space-x-4">
          <a href="/features" className="text-gray-700 hover:text-blue-500">Features</a>
          <a href="/pricing" className="text-gray-700 hover:text-blue-500">Preise</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">Über uns</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">Kontakt</a>
          <a href="/changeboard" className="text-gray-700 hover:text-blue-500">ChangeBoard</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Dokumentieren war noch nie so einfach</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          EasyLog ist dein smarter Assistent für Dokumentation, Kommunikation und Übersicht im Sozialwesen.
        </p>
        <a href="/features" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">Mehr erfahren</a>
      </main>
      <footer className="w-full py-6 text-center text-gray-400 text-sm border-t mt-20">
        © {new Date().getFullYear()} EasyLog – Mit ❤️ für Sozialarbeit gemacht.
      </footer>
    </div>
  )
}