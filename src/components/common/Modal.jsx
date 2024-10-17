import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/80  bg-white p-6 rounded-md shadow-lg"
    >
      {children}
      <form method="dialog">
        <button className="bg-stone-600 hover:bg-stone-500 px-3 py-2  rounded-md float-right mt-2 text-white">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
