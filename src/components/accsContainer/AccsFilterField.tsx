import * as React from "react";
import { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useLocation, useNavigate } from "react-router-dom";

interface RimFilterFieldProps {
  list: any;
  fieldType: any;
  name:
    | "sizeR"
    | "pcd"
    | "studHoles"
    | "centerBore"
    | "width"
    | "color"
    | "price";
}

function AccsFilterField({ list, fieldType, name }: RimFilterFieldProps) {
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

  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = React.useState<string[]>([]);
  const [currentList, setCurrentList] = React.useState(list);

  const queryParams = React.useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  useEffect(() => {
    setCurrentList(list);
  }, [list]);

  useEffect(() => {
    const queryParamsArray: any = queryParams.getAll(name).map(Number);
    // const queryParamsArray: any = queryParams.getAll(name) // toxnumem aranc number

    setSelected(
      typeof queryParamsArray === "string"
        ? queryParamsArray.split(",")
        : queryParamsArray
    );
  }, [queryParams]);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const selectedQueryArray = event.target.value as string[];
    if (selectedQueryArray.length > 0) {
      queryParams.set(name, event.target.value as string);
      navigate(`${location.pathname}?${queryParams.toString()}`, {
        replace: true,
      });
    } else {
      queryParams.delete(name);
      navigate(`${location.pathname}?${queryParams.toString()}`, {
        replace: true,
      });
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const searchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = list.filter((listItem: any) => {
      const itemName = String(listItem[name]); // Convert to string, handle null or undefined
      return (
        itemName &&
        itemName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setCurrentList(filtered);
  };

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
        {currentList?.length &&
          currentList.map((listItem: any, index: number) => (
            <MenuItem
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
              value={listItem[name]}
            >
              <Checkbox checked={selected.indexOf(listItem[name]) > -1} />
              <ListItemText primary={listItem.name} />
              {listItem[name]}({listItem.count})
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default AccsFilterField;
