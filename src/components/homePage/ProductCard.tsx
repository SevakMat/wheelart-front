import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard({ image, info, price = "" }: any) {
  return (
    <Card
      sx={{
        maxWidth: price === "" ? 350 : 300,
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: price === "" ? "100%" : "250px",
            height: price === "" ? "200px" : "250px",
            objectFit: price === "" ? "cover" : "contain",
            marginLeft: "auto",
            marginRight: "auto",

            "@media (max-width: 1090px)": {
              width: "180px",
              height: "180px",
              marginLeft: "auto",
              marginRight: "auto",
              objectFit: "cover",
            },
          }}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {info}
          </Typography>
          <Typography variant="h5" color="text.primary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
