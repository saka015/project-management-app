import React from "react";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="w-[35rem] mt-16 text-center flex flex-col justify-cednter items-center ml-44
    ">
      <p className="text-stone-600">No Project Selected</p>
      <button
        onClick={onStartAddProject}
        className="mt-4 px-4 py-2 bg-stone-600 text-stone-100 rounded-md"
      >
        + Add a Project
      </button>
    </div>
  );
};

export default NoProjectSelected;
