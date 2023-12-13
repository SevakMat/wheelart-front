import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

export default function CreateField({ list, fieldType }: any) {
  const [selected, setSelected] = React.useState("");
  const [currentList, setCurrentList] = React.useState(list);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const searchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    let filtered = list.filter((listItem: { name: string }) => {
      return listItem.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCurrentList(filtered);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel>{fieldType}</InputLabel>
      <Select
        value={selected}
        onChange={handleChange}
        onKeyDown={handleSearchKeyDown}
      >
        <TextField
          type="search"
          onKeyDown={handleSearchKeyDown}
          onChange={searchFilter}
          size="small"
        />
        {currentList.map((listItem: { name: string }) => (
          <MenuItem key={listItem.name} value={listItem.name}>
            {listItem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
