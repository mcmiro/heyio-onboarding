"use client";

import { useState } from "react";

const questions = [
  { title: "Ich habe eine Idee, aber noch kein konkretes Konzept" },
  { title: "Mein Konzept steht, jetzt brauche ich eine technische Umsetzung" },
  { title: "Ich habe bereits einen Prototyp und möchte ihn weiterentwickeln" },
  { title: "Mein Produkt ist am Markt und soll skaliert werden" },
];

export default function StepOne() {
  const [activeAnswer, setActiveAnswer] = useState<number>(0);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col divide-y divide-purple-500 rounded-xl border border-purple-500">
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => setActiveAnswer(index + 1)}
            className={`flex cursor-pointer items-center justify-between gap-16 px-8 py-8 ${index + 1 === activeAnswer ? "opacity-100" : "opacity-50"}`}
          >
            {question.title}
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-purple-500">
              {index + 1 === activeAnswer && (
                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
