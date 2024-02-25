import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { RimFilterType } from '../../../store/types/filters/filters';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from '../../../store';
import { getFiltersEffect } from '../../../store/effects/filter/filter.effects';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface SelectFilterProps {
  filterType: RimFilterType[],
  name: string,
  lable: string,
}

export default function SelectFilter({ filterType, name, lable }: SelectFilterProps) {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const dispatch: AppDispatch = useDispatch();

  const { selectedRimFilters } = useAppSelector((state: RootState) => state.filter)

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {

    const newData = {
      ...selectedRimFilters,
      [lable]: event.target.value
    }
    dispatch(getFiltersEffect(newData))



    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {filterType?.map((filter: any, index) => (
            <MenuItem key={index} value={filter[lable]}>
              {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
              <ListItemText primary={` count -${filter.count}, type -${filter[lable]}`} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}