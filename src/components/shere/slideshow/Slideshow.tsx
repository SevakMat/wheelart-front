import { Box } from "@mui/material";
import { useState } from "react";

interface SlideshowProps {
  images: (string | undefined)[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImgChange = (index: number = 0) => {
    return () => {
      setSelectedImageIndex(index);
    };
  };

  return (
    <Box>
      <Box
        component="img"
        src={images[selectedImageIndex]}
        sx={{ width: 700 }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 100,
          gap: 2,
        }}
      >
        {images.map((img, index) => {
          return (
            <Box
              key={index}
              component="img"
              src={img}
              onClick={handleImgChange(index)}
              sx={{
                objectFit: "contain",
                width: 100,
                border:
                  selectedImageIndex === index
                    ? "black solid 2px"
                    : "#C4C4C4 solid 1px",
                "&:hover": {
                  cursor: "pointer",
                  outline: "1px solid black",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Slideshow;
