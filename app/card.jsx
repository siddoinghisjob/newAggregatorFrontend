import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Roboto_Slab, Roboto } from "next/font/google";

const font = Roboto_Slab({ subsets: ["latin"], weight: ["800"] });
const robot = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Card({
  title,
  desc,
  img,
  link,
  domain,
  dummyImage,
  blurDataURL,
}) {
  const [err, setErr] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <li className="flex flex-col rounded-xl overflow-hidden justify-between bg-slate-100 shadow-inner text-slate-900 gap-5 border-[1px] border-slate-300 min-w-[100%] max-w-[100%] md:min-w-[30rem] md:max-w-[30rem] md:min-h-[30rem] md:max-h-[30rem]">
      <span className="relative h-full overflow-hidden">
        <Image
          placeholder="blur"
          onError={() => setErr(true)}
          blurDataURL={blurDataURL}
          src={err ? dummyImage : img}
          alt={title}
          width={500}
          height={500}
          className="min-h-[20rem] max-h-[20rem] min-w-full"
        />
        <p
          onClick={() => setHover(!hover)}
          className="absolute right-1 top-1 z-10 bg-white rounded-full p-1 bg-opacity-60 text-slate-900 hover:bg-opacity-90 cursor-pointer"
        >
          <Image src="/help-button.png" width={20} height={20} alt={"Info"} />
        </p>
        <p
          className={`${robot.className} ${
            hover ? "translate-y-1" : "translate-y-full"
          } transition-all overflow-y-auto mb-1 scrollbar-thin flex justify-center h-full w-full align-middle duration-700 text-lg bg-black bg-opacity-60 text-white absolute bottom-0 left-0 right-0 p-5 rounded-t-lg shadow-2xl`}
        >
          {desc}
        </p>
      </span>
      <p
        className={`${font.className} p-2 pt-0 text-xl md:min-h-[20%] md:max-h-[20%]`}
      >
        {title}
      </p>
      <span className="flex p-2 flex-row gap-3 items-center h-fit align-middle">
        <p>
          <Link
            href={link}
            className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-rose-600 rounded hover:bg-rose-700 text-base focus:ring-4 focus:outline-none focus:ring-rose-300"
          >
            Read
          </Link>
        </p>
        <p className="text-gray-900 font-light text-lg">@ {domain}</p>
      </span>
    </li>
  );
}
