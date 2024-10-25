import { useEffect, useState } from "react";

import Main from "./components/Main";
import ProjectsSidebar from "./components/ProjectsSidebar";

import SCREENS from "./SCREENS";

function App() {

  const [currentScreen, setCurrentScreen] = useState(SCREENS.NO_PROJECT_SELECTED);
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("products")) ?? []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(projects))
  }, [projects])

  function changeScreen(screen) {
    setCurrentScreen(screen)
  }

  function getCurrentProject() {
    return projects.find(p => p.isActive === true);
  }

  function selectCurrentProject(projectId) {
    if(projectId !== -1) {
      setProjects(prev => {
        return prev.map(proj => {
          if(proj.id === projectId){
            return {
              ...proj,
              isActive: true
            }
          }
          else if(proj.isActive) {
            return {
              ...proj,
              isActive: false
            }
          } 
          else {
            return proj;
          }
        })
      })
      changeScreen(SCREENS.PROJECT);
    }
  }

  function createNewProject(newProject) {
    setProjects([...projects, newProject]);
  }

  function addTaskToProject(projectId, {id, task}) {
    setProjects(prev => {
      return prev.map(proj => {
        if(proj.id === projectId){
          return {
            ...proj,
            tasks: [
              ...proj.tasks,
              {id, task}
            ]
          }
        }
        else {
          return proj
        }
      })
    });
  }

  function clearTaskFromProject(projectId, taskId) {
    setProjects(prev => {
      return prev.map(proj => {
        if(proj.id === projectId){
          return {
            ...proj,
            tasks: proj.tasks.filter(task => task.id !== taskId)
          }
        }
        return proj
      })
    })
  }

  function deleteProject(projectId) {
    setProjects(prev => {
      return prev.filter(proj => proj.id !== projectId);
    });
  }

  return (
    <>
      <ProjectsSidebar 
        projects={projects} 
        changeScreen={changeScreen} 
        selectCurrentProject={selectCurrentProject}
      />
      <Main 
        currentScreen={currentScreen} 
        changeScreen={changeScreen} 
        createProject={createNewProject} 
        getCurrentProject={getCurrentProject}
        clearTask={clearTaskFromProject}
        addTask={addTaskToProject}
        deleteProject={deleteProject}
      />
    </>
  );
}

export default App;
