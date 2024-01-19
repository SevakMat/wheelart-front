import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import { CarDetailsType } from "../../../store/types/car/car";
interface FieldProps {
  options?: CarDetailsType[];
  fieldType: string;
  onSelect: (fieldName: string, selectedValue: string) => void;
  value?: string;
}

function Field({ options = [], fieldType, onSelect, value }: FieldProps) {
  const [currentList, setCurrentList] = React.useState(options);

  const handleChange = (event: SelectChangeEvent) => {
    onSelect(fieldType, event.target.value as string);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    setCurrentList(options);
  }, [options]);

  const searchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = options?.filter((listItem: { name: string }) => {
      return listItem.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCurrentList(filtered);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: 180,
        background:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        border: "none",
        outline: "none",
        borderRadius: 10,
        "& fieldset": { border: "none", borderRadius: 20 },
      }}
      size="small"
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
        value={options.some((item) => {
          return item.slug === value
        }) ? value : ""}
        onChange={handleChange}
        onKeyDown={handleSearchKeyDown}
        inputProps={{ IconComponent: () => null }}
        sx={{
          transitionProperty: "transform",
          transition: "0.25 ease",
          textAlign: "center",
          "&:after": {
            content: '""',
            borderTop: "2px solid #000",
            width: "80%",
            position: "absolute",
            display: "inline",
            bottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            transform: "rotateY(90deg)",
            transition: "transform 0.25s linear",
          },
          "&:hover": { transform: "scale(1)" },
          "&:hover:after": { transform: " rotate(0deg)" },
        }}
      >
        <TextField
          type="search"
          onKeyDown={handleSearchKeyDown}
          onChange={searchFilter}
          size="small"
        />
        {currentList?.length > 0 &&
          currentList?.map((listItem: { name: string, slug: string }, index: number) => (
            <MenuItem
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
              value={listItem.slug}
            >
              {listItem.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default Field;
