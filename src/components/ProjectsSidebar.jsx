import SCREENS from "../SCREENS";
import ProjectList from "./ProjectList";
import Button from "./reusable/Button";

export default function ProjectsSidebar({projects, changeScreen, selectCurrentProject}) {

  function handleClick() {
    changeScreen(SCREENS.CREATE_PROJECT);
  }

  return (
    <div className="fixed top-20 rounded-tr-2xl bottom-0 lg:left-0  pl-10 w-[350px] overflow-y-auto text-center bg-black">
      <h1 className="text-gray-50 text-3xl font-bold p-2 pt-10 mb-10 text-left">YOUR PROJECTS</h1>
      <Button className="mr-32" onClick={handleClick}>
          <span>+</span> Add Project
      </Button>
      <ProjectList projectList={projects} selectCurrentProject={selectCurrentProject}/>
    </div>
  )
}