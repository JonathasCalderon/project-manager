import CreateProjectForm from './CreateProjectForm';
import NoProjectSelected from './NoProjectSelected';
import Project from './Project';

import SCREENS from '../SCREENS';

export default function Main({currentScreen, getCurrentProject, changeScreen, createProject, clearTask, addTask, deleteProject}) {

  const project = getCurrentProject();

  const screenDisplay = 
    currentScreen === SCREENS.NO_PROJECT_SELECTED ? <NoProjectSelected changeScreen={changeScreen}/>
    : 
    currentScreen === SCREENS.CREATE_PROJECT ? <CreateProjectForm changeScreen={changeScreen} createProject={createProject}/>
    :
    <Project project={project} addTask={addTask} clearTask={clearTask} deleteProject={deleteProject}/>

  return (
    <div className="absolute left-[350px] min-w-[calc(100%-350px)] h-screen flex items-center justify-center">
      {
        screenDisplay
      }
    </div>
  )
}