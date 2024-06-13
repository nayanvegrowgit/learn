import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleUpdateItem = (index) => {
    if (inputValue) {
      const updatedItems = [...items];
      updatedItems[index] = inputValue;
      setItems(updatedItems);
      setSelectedIndex(-1);
      setInputValue("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <TextField label="Item" value={inputValue} onChange={handleInputChange} />
      <Button
        variant="contained"
        onClick={
          selectedIndex !== -1
            ? () => handleUpdateItem(selectedIndex)
            : handleAddItem
        }
      >
        {selectedIndex !== -1 ? "Update" : "Add"}
      </Button>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                {selectedIndex === index ? (
                  <EditIcon />
                ) : (
                  <DeleteIcon onClick={() => handleDeleteItem(index)} />
                )}
              </IconButton>
            }
          >
            <ListItemText
              primary={item}
              onClick={() => setSelectedIndex(index)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
