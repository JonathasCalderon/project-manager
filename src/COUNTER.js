let counter = 1;
let taskCounter = 1;

function getNewId() {
  return counter++;
}

function getTaskId() {
  return taskCounter++;
}

export {getNewId, getTaskId}