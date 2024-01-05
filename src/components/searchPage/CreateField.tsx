import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CarType } from "../../store/types/car/car";


interface CreateFieldProps {
  list: CarType[];
  fieldType: string;
  onSelect: (filedName: string, e: any) => void
  value: string | null
}

export default function CreateField({ list, fieldType, onSelect, value }: CreateFieldProps) {
  const [selected, setSelected] = React.useState("");
  const [currentList, setCurrentList] = React.useState(list);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    onSelect(fieldType, event.target.value)
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };


  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel>{fieldType}</InputLabel>
      <Select
        value={value ?? undefined}
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
