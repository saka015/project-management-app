import React, { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState?.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleStartProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random().toString(),
      tasks: [],
    };
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: newProject.id,
      projects: [...prevState.projects, newProject],
    }));
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleDeleteProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        deleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      />
    );
  } else {
    content = <p>No Project Found</p>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        
      />
      {content}
    </main>
  );
};

export default App;
