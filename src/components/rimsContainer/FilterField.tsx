import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";

function FilterField({ list, fieldType }: any) {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [currentList, setCurrentList] = React.useState(list);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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

  const useStyles = makeStyles({
    root: {
      "& .MuiSelect-select": {
        padding: "8px 14px !important",
      },
      "& .MuiFormLabel-root": {
        width: "100vh",
      },
    },
  });

  const classes = useStyles();

  return (
    <FormControl
      classes={classes}
      size="small"
      sx={{
        m: 1,
        width: 200,
        background:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        border: "none",
        outline: "none",
        "& fieldset": { borderRadius: 20 },
      }}
    >
      <InputLabel
        sx={{
          marginLeft: 0,
          marginRight: 0,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        {fieldType}
      </InputLabel>
      <Select
        classes={classes}
        value={selected}
        multiple
        onChange={handleChange}
        onKeyDown={handleSearchKeyDown}
        inputProps={{ IconComponent: () => null, textAling: "center" }}
        input={<OutlinedInput sx={{ width: 10 }} />}
        renderValue={(selected) => selected.join(", ")}
        sx={{
          transitionProperty: "transform",
          transition: "0.25 ease",
          textAlign: "center",
        }}
      >
        <TextField
          type="search"
          onKeyDown={handleSearchKeyDown}
          onChange={searchFilter}
          size="small"
        />
        {currentList.map((listItem: { name: string }) => (
          <MenuItem
            sx={{ display: "flex", justifyContent: "center" }}
            key={listItem.name}
            value={listItem.name}
          >
            <Checkbox checked={selected.indexOf(listItem.name) > -1} />
            {/* <ListItemText primary={listItem.name} /> */}
            {listItem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FilterField;
