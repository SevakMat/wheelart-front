import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import { CarType } from "../../store/types/car/car";


interface CreateFieldProps {
  list: CarType[];
  fieldType: string;
  onSelect: (filedName: string, e: any) => void

}

export default function CreateField({ list, fieldType, onSelect }: CreateFieldProps) {
  const [selected, setSelected] = React.useState("");
  const [currentList, setCurrentList] = React.useState(list);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    onSelect(fieldType, event.target.value)
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  // const searchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   let filtered = list.filter((listItem: { name: string }) => {
  //     return listItem.name.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setCurrentList(filtered);
  // };
  // console.log(currentList);

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel>{fieldType}</InputLabel>
      <Select
        value={selected}
        onChange={handleChange}
        onKeyDown={handleSearchKeyDown}
      >
        {/* <TextField
          type="search"
          onKeyDown={handleSearchKeyDown}
          onChange={searchFilter}
          size="small"
        /> */}
        {list.map((listItem: any) => (
          <MenuItem key={"qwe"} value={listItem.slug}>
            {listItem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
