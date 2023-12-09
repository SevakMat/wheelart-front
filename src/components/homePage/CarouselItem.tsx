import { Box, Paper } from "@mui/material";

const Item = ({ item }: any) => {
  return (
    <>
      <Paper elevation={0} sx={{ position: "relative" }}>
        <img
          src={item.image}
          style={{
            width: "100%",
            // height: "auto",
            objectFit: "cover",
            maxHeight: "90vh",
            margin: "0",
          }}
        />
      </Paper>
      <Box
        sx={{
          position: "absolute",
          background: "transparent",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "250px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          top: "45%",
          left: "50%",
          transform: " translateX(-50%)",
          color: "white",

          // width: "100%",
          // height: "100%",
        }}
      >
        {item.text}
      </Box>
    </>
  );
};

export default Item;
