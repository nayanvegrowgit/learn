import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import "./App.css";
//import Task from "./Task";
import InputComp from "./InputComp.jsx";
import DisplayList from "./DisplayList.jsx";
function App() {
  const [tasklist, setTaskList] = useState([]);
  const addTask = (task) => {
    console.log(`addTask ::: '${task}'`);
    setTaskList([task, ...tasklist]);
    console.log("type in addTask : " + typeof tasklist);
    console.log(`taskList in addTask: ${[task, ...tasklist]}`);
  };
  const editTask = (index, updatedtask) => {
    console.log(
      `editTask ::: index : ${index}   updated task : '${updatedtask}'`
    );
    console.log(
      "list after update::: part1  '" +
        [...tasklist.slice(0, index)] +
        "' ---- part2 '" +
        updatedtask +
        "' ---- part3 '" +
        [...tasklist.slice(index + 1)]
    );
    setTaskList([
      ...tasklist.slice(0, index),
      updatedtask,
      ...tasklist.slice(index + 1),
    ]);
  };
  const deleteTask = (index) => {
    console.log(`deleteTask ::: index : ${index} -> ${tasklist[index]}`);
    console.log(
      "list after delete::: part1  '" +
        [...tasklist.slice(0, index)] +
        "' ---- part2 '" +
        [...tasklist.slice(index + 1)]
    );
    setTaskList([...tasklist.slice(0, index), ...tasklist.slice(index + 1)]);
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        List Of Tasks
      </Typography>

      <InputComp
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
      <Typography variant="h4" component="h2">
        List :
      </Typography>

      <DisplayList tasklist={tasklist} />
    </div>
  );
}
export default App;
