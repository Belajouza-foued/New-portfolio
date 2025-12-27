"use client";
import { useState } from "react";
export default function Projects() {
  const [text,setText] = useState("");

  const speakText = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "fr-FR";
  utterance.rate = 1;   // vitesse (0.5 lent → 2 rapide)
  utterance.pitch = 1;  // tonalité (0 → 2)
    window.speechSynthesis.speak(utterance)
  }
return (
  <div className="grid grid-cols-1 md:grid-col-2 gap-4 text-center w-1/2 mx-auto text-center">
    <input type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="text-center border border-gray-600 p-2 rounded"
    placeholder="Type something"/>
    <button onClick={speakText}
    className="bg-blue-600  text-white px-4 py-2 rounded hover:bg-blue-600 transition">speak</button>

        <div>
          <h1>fofo belajouza</h1>
        </div>
    
    </div>
);
}