import React from "react";
import { UnifrakturCook } from "next/font/google";

const font = UnifrakturCook({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  return (
    <div
      className={`${font.className} bg-slate-900 text-center text-white h-full w-full flex-col justify-start font-sans border-b-[1px] text-5xl p-3 flex`}
    >
      The News Aggregator
    </div>
  );
}
