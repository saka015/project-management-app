// NewProject.js
import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./common/Modal";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show an error message
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mt-1">
          Oops .... looks like you forgot to add a value
        </p>
        <p className="text-stone-600 mt-1">
          Please make sure you provide a valid value to every input
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-700 rounded-md py-2 px-6"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
