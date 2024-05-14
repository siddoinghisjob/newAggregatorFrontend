"use client";

import React, { useState } from "react";
import Header from "./header";
import Body from "./body";
import Loader from "./loader";

export default function Index() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="h-full overflow-hidden min-h-screen w-full flex flex-col">
      <Header />
      <main className="p-2 relative flex justify-center align-middle w-full hfull">
        <Body setLoading={setLoading}/>
        {loading && <Loader/>}
      </main>
    </div>
  );
}
