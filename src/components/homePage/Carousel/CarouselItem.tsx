import { Box } from "@mui/material";

const CarouselItem = ({ item }: any) => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", maxHeight: "90vh" }}>
      <Box sx={{}}>
        <img
          src={item.image}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.6)",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "250px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          padding: "20px",

          // Responsive adjustments
          "@media (max-width: 600px)": {
            fontSize: "14px",
            padding: "10px",
          },
        }}
      >
        {item.text}
      </Box>
    </Box>
  );
};

export default CarouselItem;
