export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { input, apiKey } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Formuliere die Eingabe als professionellen Journaleintrag für den Sozialbereich. Halte ihn kurz, sachlich und korrekt.",
        },
        {
          role: "user",
          content: input,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  const generated = data.choices?.[0]?.message?.content || "Keine Antwort erhalten.";
  res.status(200).json({ output: generated });
}