import Input from "./reusable/Input";
import Button from "./reusable/Button";
import { useRef } from "react";
import { getTaskId } from "../COUNTER";

export default function Project({project, addTask, clearTask, deleteProject}) {

  if(!project) return;

  const {id, title, description, tasks, dueDate} = project;

  const newTaskRef = useRef();

  function handleAddTask() {

    const newTask = {
      id: getTaskId(),
      task: newTaskRef.current.value
    } 

    addTask(id, newTask);
    newTaskRef.current.value = "";
  }

  return (
    <div className="w-[100%] p-24">
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-gray-700 text-4xl font-bold">{title}</h1>
          <p className="text-gray-500 text-md">{dueDate}</p>
        </div>
        <Button isInverse={true} onClick={() => deleteProject(id)}>Delete</Button>
      </div>
      <p className="text-gray-700 text-lg">{description}</p>
      <hr className="bg-gray-900 my-5 h-0.5" />
      <h1 className="text-gray-700 text-4xl font-bold">Tasks</h1>
      <div className="flex">
        <Input ref={newTaskRef} type="text" name="addTask" className="lg:min-w-[400px]"/>
        <button 
          className="ml-5"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div className="bg-gray-200 rounded">
        {
          tasks?.map(({id: taskId, task}) => {
            return (
            <div key={taskId} className="flex justify-between p-5 hover:bg-gray-100">
              <p className="text-gray-700">{task}</p> 
              <button onClick={() => clearTask(id, taskId)} className="hover:text-red-700">Clear</button>
            </div>
          )})
        }
      </div>
    </div>
  )
}