import { useState, useEffect, useRef } from "react";
import spinner from "../assets/spinner.svg";

export default function List() {
  return (
    <>
      <h1 className="text-4xl">Unsplash Clone.</h1>
      <form>
        <label className="block mb-4" htmlFor="search">
          Look for images...
        </label>
        <input
          type="text"
          placeholder="Look for something..."
          className="block w-full mb-14 text-slate-800 py-3 px-2
            text-md outline-gray-500 rounded border border-slate-400"
        />
      </form>
    </>
  );
}
