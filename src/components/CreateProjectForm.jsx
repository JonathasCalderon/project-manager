import { useRef } from "react";

import Button from "./reusable/Button";
import Input from "./reusable/Input";

import SCREENS from "../SCREENS";
import {getNewId} from "../COUNTER";

export default function CreateProjectForm({changeScreen, createProject}) {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleClick() {

    const newProject = {
      id: getNewId(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      isActive: true,
      tasks: []
    }

    createProject(newProject);

    changeScreen(SCREENS.NO_PROJECT_SELECTED);
  }

  return(
    <div className="w-[100%] px-10">
      <div className="flex justify-end">
        <Button isInverse={true} onClick={() => changeScreen(SCREENS.PROJECT)}>Cancel</Button>
        <Button onClick={handleClick}>Save</Button>
      </div>
      <Input ref={titleRef} label="title" name="title" type="text" required/>
      <Input ref={descriptionRef} label="description" name="description" isTextArea={true} required/>
      <Input ref={dueDateRef} label="due date" placeholder="dd.mm.yyyy" name="dueDate" type="date" required/>
    </div>
  )
}