import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="absolute w-full h-full top-0 z-20">
      <div className="h-screen fixed left-0 right-0 flex justify-center bg-black bg-opacity-45 items-center">
        <Image
          src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"
          width={80}
          height={80}
          alt={"Loading..."}
          className="bg-white rounded-full p-2 "
        />
      </div>
    </div>
  );
}
