import React, { useState } from "react";
import NewTasks from "./NewTasks";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="mt-8 text-center underline underline-offset-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {tasks?.length === 0 ? (
        <p>No tasks added</p>
      ) : (
        <div>
          <ul className="bg-stone-100 rounded-md p-2 mt-4">
            {tasks?.map((task) => (
              <li className="flex justify-between mt-2 p-1" key={task.id}>
                <span>{task.text}</span>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-700 hover:text-red-500 rounded-md "
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
