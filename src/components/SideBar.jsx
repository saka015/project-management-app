import React from "react";
import { Button } from "./common/Button";

const SideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={onStartAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={`mt-2 block w-full px-4 py-2 text-left rounded-md ${
                project.id === selectedProjectId
                  ? "bg-stone-700 text-stone-100"
                  : "hover:bg-stone-700 hover:text-stone-100"
              }`}
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>

      <footer className="absolute mt-[100%] bottom-0 bg-stone-600 py-3 rounded-md pl-3 hover:bg-stone-700">
        Developed by :{" "}
        <a href="https://github.com/saka015">
          <span className="hover:underline">saka015</span> 🚀
        </a>
      </footer>
    </aside>
  );
};

export default SideBar;
