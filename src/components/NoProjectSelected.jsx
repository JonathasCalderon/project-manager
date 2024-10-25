import Button from './reusable/Button';
import noProjectsImage from '../assets/no-projects.png';
import SCREENS from '../SCREENS';


export default function NoProjectSelected({changeScreen}) {
  return (
    <div>
      <img src={noProjectsImage} alt="no projects" className="h-28 block mx-auto"/>
      <h1 className="text-gray-700 text-3xl text-center font-bold p-2 my-5" >No Project Selected</h1>
      <p className="text-gray-500 text-center text-lg">Please select a project or get started with a new one</p>
      <div className="flex">
        <Button className="mx-auto m-5" onClick={() => changeScreen(SCREENS.CREATE_PROJECT)}>Create new project</Button>
      </div>
    </div>
  )
}