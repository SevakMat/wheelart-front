import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 5, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 10,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",

        "@media (max-width: 1050px)": {
          "&:focus": {
            width: "12ch",
          },
        },
      },
    },
  },
}));

const SarchBar = () => {
  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ fontSize: 28 }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Recherche…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
};

export default SarchBar;
