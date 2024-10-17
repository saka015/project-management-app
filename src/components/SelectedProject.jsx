import React from "react";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  deleteProject,
  onAddTask,
  onDeleteTask,
  tasks
}) {
  if (!project) return <p>No project selected</p>;

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="px-4 py-2 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <button
            onClick={deleteProject}
            className="text-stone-100 hover:text-stone-200 bg-stone-600 p-2 rounded-md"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 font-semibold mb-3">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={ tasks} />
    </div>
  );
}
