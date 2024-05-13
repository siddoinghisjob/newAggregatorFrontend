import React from "react";
import { Oxygen } from "next/font/google";

const font = Oxygen({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  return (
    <div
      className={`${font.className} bg-slate-900 rounded-b-xl h-full w-full flex-col justify-start font-sans border-b-[1px] text-4xl p-3 flex`}
    >
      <span className="w-44">NEWS</span>
      <span className="w-44">Aggregator</span>
    </div>
  );
}
