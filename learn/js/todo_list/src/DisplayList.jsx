import { List, ListItem, ListItemText } from "@mui/material";
export default function DisplayList({ tasklist }) {
  console.log(`Display List :${tasklist}`);
  return (
    <ol>
      {tasklist.map((po) => (
        <li key={po}>{po}</li>
      ))}
    </ol>
  );
}
