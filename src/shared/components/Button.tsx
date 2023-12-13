import { FC } from "react";
import Box from "@mui/material/Box";

export type IButton = {
  text: string;
  onChange: void;
};

const Button: FC<IButton> = ({ text, onChange }) => {
  return (
    <button
      onClick={() => {
        onChange;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
