import {
  TextField,
  Box,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
export default function InputComp({ addTask, editTask, deleteTask }) {
  const [action, setAction] = useState(["", 0, -1]);
  const handleAddChange = (event) => {
    setAction([event.target.value, ...action.slice(1)]);
  };
  const handleIndexChange = (event) => {
    setAction([...action.slice(0, 2), event.target.value]);
  };
  const handleSelectChange = (event) => {
    setAction([action[0], event.target.value, action[2]]);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <InputLabel id="InsertField">Add Task</InputLabel>

        <TextField
          id="InsertField"
          label="Task"
          variant="outlined"
          value={action[0]}
          onChange={handleAddChange}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (action[0].length) {
              addTask(action[0]);
              setAction(["", ...action.slice(1)]);
            }
          }}
        >
          Add
        </Button>

        <InputLabel id="action">Select Action</InputLabel>

        <Select
          labelId="action"
          id="actionSelect"
          label="Action"
          value={action[1]}
          onChange={handleSelectChange}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>Delete</MenuItem>
          <MenuItem value={2}>Update</MenuItem>
        </Select>
        <TextField
          id="Index"
          label="Index"
          variant="outlined"
          value={action[2]}
          type="number"
          onChange={handleIndexChange}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (+action[2] < 0) {
              alert("Index should be greater than 0");
            } else {
              if (action[1] == 1) {
                deleteTask(+action[2]);
              } else if (action[1] == 2) {
                editTask(+action[2], prompt("Task"));
              }
              setAction([action[0], 0, -1]);
            }
          }}
        >
          Done
        </Button>
      </Box>
    </div>
  );
}
