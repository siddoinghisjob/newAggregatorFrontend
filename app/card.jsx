import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  
  return (
    <li className="p-4 bg-slate-50 shadow-xl text-slate-900 flex gap-5 flex-col border-2 rounded-xl min-w-[100%] max-w-[100%] md:min-w-[30rem] md:max-w-[30rem] min-h-[30rem] max-h-[30em] md:min-h-[25rem] md:max-h-[25rem]">
      <p className="min-h-[40%] text-lg font-bold max-h-[40%] md:min-h-[20%] md:max-h-[20%]">
        {title}
      </p>
      <span className="w-full h-full max-h-[15rem] justify-center items-center flex max-w-full overflow-hidden">
        <p className="w-full h-full p-1 flex justify-center">
          <Image
            placeholder="blur"
            onError={() => setErr(true)}
            blurDataURL={blurDataURL}
            src={err ? dummyImage : img}
            alt={title}
            width={400}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </p>
      </span>
      <span className="flex flex-row gap-3 items-center h-fit align-middle">
        <p>
          <Link href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read
          </Link>
        </p>
        <p className="text-gray-800">@ {domain}</p>
      </span>
    </li>
  );
}
