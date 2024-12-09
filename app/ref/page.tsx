"use client";

import { useRef } from "react";
import RefButton from "@/components/ref-button";

const RefPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input className="input input-bordered" ref={inputRef} />
      <button
        className="btn btn-primary mx-2"
        onClick={() => inputRef.current?.focus()}
      >
        Focus
      </button>
      <RefButton ref={inputRef} />
    </>
  );
};

export default RefPage;
