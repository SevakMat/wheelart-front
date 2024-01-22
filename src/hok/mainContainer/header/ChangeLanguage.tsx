import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const [t, i18n] = useTranslation<"global", undefined>("global");
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("ln") || "fr"
  );

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem("ln", language);
  };

  return (
    <Box
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {currentLanguage === "fr" && (
        <button
          onClick={() => changeLanguage("en")}
          style={{
            cursor: "pointer",
          }}
        >
          EN
        </button>
      )}

      {currentLanguage === "en" && (
        <button
          onClick={() => changeLanguage("fr")}
          style={{
            cursor: "pointer",
          }}
        >
          FR
        </button>
      )}
    </Box>
  );
};

export default ChangeLanguage;
