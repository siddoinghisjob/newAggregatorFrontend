import React from "react";
import { UnifrakturCook } from "next/font/google";

const font = UnifrakturCook({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  return (
    <div
      className={`${font.className} bg-white text-center text-slate-900 h-full w-full flex-col shadow-box justify-start font-sans border-b-[1px] text-5xl p-3 flex`}
    >
      The News Aggregator
    </div>
  );
}
