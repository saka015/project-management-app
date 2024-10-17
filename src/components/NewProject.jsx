// NewProject.js
import React, { useRef } from "react";
import Input from "./Input";

function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });


  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}

export default NewProject;
