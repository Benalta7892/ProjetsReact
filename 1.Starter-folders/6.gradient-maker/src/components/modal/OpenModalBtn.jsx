import { useState } from "react";
import { createPortal } from "react-dom";
import CodeModal from "./CodeModal";

export default function OpenModalBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-blue-700 py-2 px-6 rounded-md
        min-w-[125px] font-semibold">
        Get the code !
      </button>
      {showModal && createPortal(<CodeModal closeModal={() => setShowModal(!showModal)} />, document.body)}
    </>
  );
}
