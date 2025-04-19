import { useState } from "react";

export default function ChangeBoard() {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    if (input.trim() === "") return;

    const newEntry = {
      text: input,
      date: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">ChangeBoard</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Was hat sich verändert? Was soll das Team wissen?"
          className="w-full h-32 p-4 border rounded-lg resize-none"
        />
        <button
          onClick={addEntry}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Eintrag speichern
        </button>
        <div className="space-y-4 mt-10">
          {entries.length === 0 && (
            <p className="text-gray-500">Noch keine Einträge vorhanden.</p>
          )}
          {entries.map((entry, index) => (
            <div key={index} className="bg-white border p-4 rounded-lg shadow-sm">
              <p className="text-gray-800">{entry.text}</p>
              <p className="text-sm text-gray-400 mt-2">📅 {entry.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}