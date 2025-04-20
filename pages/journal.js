import { useState } from "react";

export default function Journal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    if (!input.trim() || !apiKey.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input, apiKey }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (err) {
      setOutput("Fehler beim Laden von GPT.");
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    alert("Eintrag kopiert!");
  };

  const saveToFile = () => {
    const element = document.createElement("a");
    const file = new Blob([output], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "journal-eintrag.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">KI-Journal Assistent</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="🔐 Dein OpenAI API-Key"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Beschreibe kurz, was passiert ist..."
          className="w-full h-32 p-4 border rounded-lg resize-none"
        />
        <button
          onClick={generateText}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Formuliere..." : "Mit KI umformulieren"}
        </button>

        {output && (
          <div className="bg-white p-4 rounded-lg border shadow-sm space-y-4">
            <p className="whitespace-pre-wrap text-gray-800">{output}</p>
            <div className="flex gap-4">
              <button onClick={copyToClipboard} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Kopieren</button>
              <button onClick={saveToFile} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Speichern</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}