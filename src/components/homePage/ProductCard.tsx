import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard({ image, info, price }: any) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {info} {console.log(info)}
          </Typography>
          <Typography variant="h5" color="text.primary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
