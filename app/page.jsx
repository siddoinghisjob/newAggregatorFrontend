"use client";

import React from "react";
import Header from "./header";
import Body from "./body";

export default function Index() {
  return (
    <div className="h-full min-h-screen flex flex-col gap-5">
      <Header />
      <Body/>
    </div>
  );
}
