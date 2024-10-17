import { useState } from "react";

export default function NewTasks({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");
    const [placeholder, setPlaceholder] = useState("Add New Task");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClickk() {
    if (enteredTask.trim() === "") {
        setPlaceholder("Task can't be empty !!!!");
    setEnteredTask("");

        setTimeout(() => {
            setPlaceholder("Add New Task");
        }, 1500);
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center mt-6 w-full ">
      <input
        className="w-96 px-2 py-1 rounded-md bg-stone-50 border outline-none focus:border-stone-500"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClickk}
        className="text-white  w- rounded-md p-1 mx-4 px-4 bg-stone-800 cursor-pointer active:cursor-wait hover:bg-stone-700"
      >
        + Add Task
      </button>
    </div>
  );
}
